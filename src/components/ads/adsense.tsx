import React, { useEffect } from 'react';

declare global {
    interface Window { adsbygoogle: any; }
}

export const Adsense = () => {
  
    useEffect(() => {
        if (window) {
          window.adsbygoogle = window.adsbygoogle || []
          window.adsbygoogle.push({})
        }
      })

  return (
      <ins 
        className="adsbygoogle"
        style={{display:'block'}}
        data-ad-client="ca-pub-7302857299919167"
        data-ad-slot="7012316433"
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
  )
}

export default Adsense