import {useState} from 'react';

const useFetch = () => {
  const [request, setRequest] = useState({
    response: {
      items: null,
      totalCount: 0
    },
    loading: false,
    error: false,
    errorMessage: null,
    performed: 0,
    remaining: 10,
    limit: 10,
    reset: 0,
    tooMuch: false
  });

  const notifyResult = res => {
    res.json().then(data => {
      setRequest(state => {
        return {
          ...state,
          response: data,
          loading: false,
          error: false,
          performed: Number(res.headers.get('X-RateLimit-Limit')) - Number(res.headers.get('X-RateLimit-Remaining')),
          remaining: Number(res.headers.get('X-RateLimit-Remaining')),
          limit: Number(res.headers.get('X-RateLimit-Limit')),
          reset: res.headers.get('X-RateLimit-Reset')
        }
      })
    });
  }

  const notifyError = err => {
    setRequest(state => {
      return {...state, loading: false, error: true, errorMessage: err.message}
    })
  };

  const notifyLimit = () => {
    setRequest(state => {
      return {...state, tooMuch: true, loading: false, error: false}
    });
  };

  const execute = (url, term, configuration) => {
    if(request.remaining > 1) {
      setRequest(state => { 
        return {
          ...state,
          loading: true,
          error: false,
          term
        }
      });
      
      fetch(url + term, configuration).then(res => {
        if(res.ok) {
          notifyResult(res);
        } else {
          notifyError(new Error(`${res.status}: ${res.statusText}`));
        }
      }).catch( error => {
        notifyError(error);
      });
      
    } else {
      notifyLimit();
    }
  };

  return { request, execute };
}

export default useFetch;