import Script from "next/script"

export const Analytics = () => {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-F2QN3NJGDG" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-F2QN3NJGDG');
        `}
            </Script>
        </>)
}