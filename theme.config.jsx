import Script from "next/script"

export default {
  footer: <p>MIT 2024 © resyfer.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HFNGDFK1PN"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HFNGDFK1PN');
        `}
      </Script>

    </>
  ),
  postFooter: false,
}