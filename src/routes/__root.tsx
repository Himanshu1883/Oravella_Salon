import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageTransition } from "@/components/layout/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary px-4 pt-24">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="heading-display mt-6 text-text-primary text-5xl">Page not found</h1>
        <p className="mt-4 text-sm text-text-secondary">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex mt-8 eyebrow gold-underline text-gold">
          ← Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary px-4">
      <div className="max-w-md text-center">
        <h1 className="heading-display text-text-primary text-3xl">This page didn't load</h1>
        <p className="mt-4 text-sm text-text-secondary">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 bg-gold text-bg-primary text-xs tracking-[0.25em] uppercase hover:bg-gold-muted transition"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2.5 border border-border-subtle text-text-primary text-xs tracking-[0.25em] uppercase hover:border-gold transition">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar" },
      { name: "description", content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II." },
      { name: "author", content: "Orvella Salon" },
      { property: "og:title", content: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar" },
      { property: "og:description", content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Orvella Salon — Luxury Hair, Skin & Beauty in Lajpat Nagar" },
      { name: "twitter:description", content: "Orvella Salon is New Delhi's premier luxury salon for hair, skincare, makeup, and bridal services in Lajpat Nagar II." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fb2ff43b-252d-4bd9-b0aa-97f9d8999861/id-preview-31f90b67--d1b2f3a5-a7d0-43a9-97ed-5d90348e9393.lovable.app-1782715819852.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fb2ff43b-252d-4bd9-b0aa-97f9d8999861/id-preview-31f90b67--d1b2f3a5-a7d0-43a9-97ed-5d90348e9393.lovable.app-1782715819852.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // The gallery is a Locomotive-driven full-screen experience that renders its
  // own footer inside the scroll area, so we hide the global one there.
  const isGallery = pathname === "/gallery";

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        {!isGallery && <Footer />}
        <WhatsAppFloat />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
