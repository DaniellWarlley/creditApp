import { useEffect } from 'react'
import { GlobalStyle } from './assets/global.js'
import useCheckToken from '../shared/hooks/useCheckToken.js'
import Loading from '../shared/components/Loading.jsx'

function App() {    
  const { isValid } = useCheckToken()

  return (
    <>
      {isValid && <Loading/>}
      <GlobalStyle/>
    </>
  )
}

export default App
