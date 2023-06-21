import { useEffect } from "react"

export default function ShareData() {

  useEffect(() => {
    if(navigator.share == undefined){
      console.log('undefined');
      if(window.location.protocol === 'http:'){
        window.location.replace(window.location.href.replace(/^http:/, 'https:'));
      }
    }else{
      console.log('ga undefined')
    }
  })
  return (
    <div>
      ini data untuk share
    </div>
  )
}
