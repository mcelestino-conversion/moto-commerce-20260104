import './globals.css'

export const metadata = {
  title: 'moto commerce 20260104',
  description: '{"project":{"name":"moto commerce","type":"web_app","framework":"nextjs","language":"typescript"},"description":"a full-featured motorcycle e-commerce platform with authentication, product management, shopping cart, and stripe payments.","features":["authentication","shopping_cart","payment_integration","admin_dashboard","product_search","reviews","seo_optimization","analytics"],"pages":["home","products","product details","cart","checkout","account","admin"],"styling":{"framework":"tailwind","color_scheme":"black_red_gray"},"requirements":{"seo":true,"analytics":true,"performance":"high"}}',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
