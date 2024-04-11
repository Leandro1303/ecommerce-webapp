import { Spinner } from 'react-bootstrap'
import './loading-page.styles.css'

function LoadingPage() {
  return (
    <div className='loading-container'>
      <Spinner />
    </div>
  )
}

export default LoadingPage
