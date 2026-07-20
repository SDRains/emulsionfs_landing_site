import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductConnectors from "@/components/product/ProductConnectors";
import ProductProcess from "@/components/product/ProductProcess";
import ProductRepository from "@/components/product/ProductRepository";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductCta from "@/components/product/ProductCta";
import {analytics} from "@/lib/analytics";
import {useEffect} from "react";

export default function Product() {
    useEffect(() => {
        analytics.page()
    }, [])

    return (
        <div className="min-h-screen bg-primary-cream text-white">
            <Seo
                title="Emulsion Product — Every system, handled end to end"
                description="Live API connections and full legacy extraction into a repository you control — unified search, consolidated reporting, and a team that maps your business."
                path="/product"
            />
            <Navbar activePage='product' />
            <main>
                <ProductHero />
                <ProductConnectors />
                <ProductProcess />
                <ProductRepository />
                <ProductFeatures />
                <ProductCta />
            </main>
            <Footer />
        </div>
    )
}