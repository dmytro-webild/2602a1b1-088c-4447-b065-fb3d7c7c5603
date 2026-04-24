"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "Shop",          id: "products"},
        {
          name: "About",          id: "about"},
        {
          name: "FAQ",          id: "faq"},
      ]}
      brandName="Offset Official"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Minimal Streetwear for the Bold."
      description="Offset Official. Custom designs, delivered nationwide in Pakistan. Express your style with our curated collections."
      testimonials={[
        {
          name: "Ahmed Raza",          handle: "@ahmed",          testimonial: "The quality is unmatched and delivery was fast.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-hipster-arab-man-guy-sunglasses-posed-outdoor-street-sunset-against-gray-wall_627829-2750.jpg?_wi=1",          imageAlt: "minimalist streetwear fashion photography"},
        {
          name: "Sara Khan",          handle: "@sara",          testimonial: "Obsessed with their minimal design aesthetic.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-fashion-designer-linen-red-dress-smiles-sincerely-charming-woman-holds-pencils-draws-cloth-pattern-craft-paper-sheet_197531-29816.jpg",          imageAlt: "minimalist streetwear fashion photography"},
        {
          name: "Ali Mustafa",          handle: "@ali",          testimonial: "Great custom service for my bulk order.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/plus-size-t-shirt-white-basic-women-rsquo-s-casual-wear-outdoor-shoot_53876-123579.jpg?_wi=1",          imageAlt: "minimalist streetwear fashion photography"},
        {
          name: "Fatima Noor",          handle: "@fatima",          testimonial: "Fastest delivery I've experienced in Karachi.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149134029.jpg?_wi=1",          imageAlt: "minimalist streetwear fashion photography"},
        {
          name: "Bilal Ahmed",          handle: "@bilal",          testimonial: "Bold and clean designs. Will buy again.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-hipster-arab-man-guy-posed-outdoor-street-style-rap-singer_627829-2776.jpg?_wi=1",          imageAlt: "minimalist streetwear fashion photography"},
      ]}
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-hipster-arab-man-guy-sunglasses-posed-outdoor-street-sunset-against-gray-wall_627829-2750.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stylish-casual-hipster-girl-cap-jeans-wear-against-large-graffiti-wall_627829-7731.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/caucasian-punk-female-with-attitude-outdoors_23-2149111015.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/fashionable-long-legs-brunette-model-long-black-cloak-posed-outdoor-winter-day-against-old-grunge-wall_627829-14032.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/stylish-urban-style-african-american-man-pink-hoodie-posed-afro-rapper-guy_627829-1470.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-stylish-spanish-man-posing-red-wall-background-sunny-day_181624-54408.jpg",          alt: "Customer 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Free Delivery Nationwide"},
        {
          type: "text",          text: "Premium Fabric"},
        {
          type: "text",          text: "Custom Designs"},
        {
          type: "text",          text: "24/7 Customer Support"},
        {
          type: "text",          text: "Bold Minimalist Style"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Vision"
      description={[
        "Offset Official was born from a desire to bring bold, minimal streetwear to the streets of Pakistan.",        "We believe in quality over quantity, offering custom designs that speak for themselves."]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      animationType="slide-up"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Core Essential Tee",          price: "PKR 2,500",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/plus-size-t-shirt-white-basic-women-rsquo-s-casual-wear-outdoor-shoot_53876-123579.jpg?_wi=2"},
        {
          id: "p2",          name: "Bold Graphic Hoodie",          price: "PKR 4,500",          variant: "White",          imageSrc: "http://img.b2bpic.net/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149134029.jpg?_wi=2"},
        {
          id: "p3",          name: "Urban Jacket",          price: "PKR 6,000",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-hipster-arab-man-guy-posed-outdoor-street-style-rap-singer_627829-2776.jpg?_wi=2"},
        {
          id: "p4",          name: "Minimal Sweatshirt",          price: "PKR 3,500",          variant: "Grey",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-jumping_23-2148925642.jpg"},
        {
          id: "p5",          name: "Logo Cap",          price: "PKR 1,200",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-brunette-girl-gray-cap-casual-street-style-winter-day-against-colored-wall_627829-9028.jpg"},
        {
          id: "p6",          name: "Street Joggers",          price: "PKR 3,000",          variant: "Black",          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-beautiful-african-american-woman-posing-black-leather-jacket-pants-street_627829-12431.jpg"},
      ]}
      buttons={[
        { text: "Order on WhatsApp", href: "https://wa.me/message/3ET5TYJ5RD7NF1" }
      ]}
      title="Our Collection"
      description="Minimalist streetwear essentials for everyday wear."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Nationwide Delivery",          subtitle: "Delivering across all cities in Pakistan.",          category: "Logistics",          value: "100%"},
        {
          id: "f2",          title: "Custom Designs",          subtitle: "Get personalized graphics tailored to your taste.",          category: "Design",          value: "Personalized"},
        {
          id: "f3",          title: "Premium Material",          subtitle: "High-quality fabrics designed to last.",          category: "Quality",          value: "Premium"},
      ]}
      title="Why Choose Offset"
      description="We prioritize quality craftsmanship and customer satisfaction above all."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "1.2k+",          description: "Happy Followers"},
        {
          id: "m2",          value: "260+",          description: "Successful Posts"},
        {
          id: "m3",          value: "100%",          description: "Commitment"},
      ]}
      title="Our Impact"
      description="Growing our community across Pakistan."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How can I order?",          content: "You can DM us or message us on WhatsApp to place your order."},
        {
          id: "q2",          title: "Do you deliver nationwide?",          content: "Yes, we deliver all over Pakistan."},
        {
          id: "q3",          title: "Can I request custom designs?",          content: "Absolutely! Reach out to us via DM or WhatsApp to discuss your idea."},
      ]}
      title="Common Questions"
      description="Answers to your queries about our brand."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in touch"
      title="Ready to order?"
      description="Send us a message on WhatsApp for custom orders and inquiries."
      buttons={[
        {
          text: "Message on WhatsApp",          href: "https://wa.me/message/3ET5TYJ5RD7NF1"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Offset Official"
      leftLink={{
        text: "Terms of Service",        href: "#"}},
      rightLink={{
        text: "Privacy Policy",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}