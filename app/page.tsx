"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Upload, Search, ShoppingBag, Brain, Users, Store, MessageCircle, Heart, CheckCircle, Sparkles, Wand2, Sparkle, ShoppingCart, Image as ImageIcon, Camera } from "lucide-react";
import Image from "next/image";
import queryImg from "@/assets/query.png";
import topSuggestionImg from "@/assets/top_suggestion.png";
import secondImg from "@/assets/2nd.png";
import thirdImg from "@/assets/3rd.png";
import fourthImg from "@/assets/4th.png";
import { db } from "@/lib/firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailTrimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) return;

    try {
      const col = collection(db, "waitlist");
      const id = emailTrimmed.replace(/[.#$/\[\]]/g, "_");
      await setDoc(doc(col, id), {
        email: emailTrimmed,
        createdAt: serverTimestamp(),
        source: "landingpage",
      }, { merge: true });

      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error("waitlist save failed", err);
    }
  };

  const howItWorks = [
    {
      icon: ImageIcon,
      title: "העלי תמונה",
      description: "העלי תמונה של לוק שאהבת או אאוטפיט שראית על מישהי אחרת"
    },
    {
      icon: Wand2,
      title: "מצאי התאמות",
      description: "המערכת שלנו מזהה את הבגדים ומציגה לך את ההתאמות המדויקות ביותר"
    },
    {
      icon: ShoppingCart,
      title: "קני בקליק",
      description: "עברי ישירות לרכישה או שמרי לארון הווירטואלי שלך"
    }
  ];

  const whyMesh = [
    {
      icon: Sparkle,
      title: "טכנולוגיה מתקדמת",
      description: "מבוססת בינה מלאכותית שלומדת את הסטייל שלך ומתאימה לך המלצות מדויקות"
    },
    {
      icon: Users,
      title: "קהילה של נשים",
      description: "שתפי לוקים, גלי שילובים חדשים וקבלי השראה מהקולקציות של אחרות"
    },
    {
      icon: Store,
      title: "מכל החנויות",
      description: "Zara, Bershka, Shein, Pull&Bear, Mango ועוד מאות חנויות אופנה מובילות"
    },
    {
      icon: MessageCircle,
      title: "קהילה פעילה",
      description: "כל פריט מקבל תגובות, שיתופים ודעות אמיתיות ממשתמשות נוספות"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100" dir="rtl">
      <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-gradient-to-br from-rose-50 via-pink-50/90 to-rose-100/80">
        {/* Background decoration - Premium gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/40 via-pink-200/30 to-rose-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-200/35 via-rose-200/25 to-pink-300/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-rose-300/20 via-pink-200/15 to-rose-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo - Compact */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10 flex flex-col items-center"
            >
              <img 
                src="/logo.png" 
                alt="MESH Logo" 
                className="h-[16vh] sm:h-[18vh] md:h-[20vh] lg:h-[22vh] w-auto max-w-full mb-4"
                style={{ 
                  display: 'block',
                  margin: '0 auto',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  padding: 0,
                  background: 'transparent'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-3 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                MESH
              </h1>
              <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full" />
            </motion.div>

            {/* Opening Line - Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-6 sm:mb-8 font-semibold leading-relaxed px-4 max-w-5xl mx-auto"
            >
              MESH מזהה את הבגדים שבתמונה ומציגה לך הצעות ממאות אתרי אופנה.
              <br />
              <span className="text-rose-600 font-bold">הכל במקום אחד, במהירות ובסטייל.</span>
            </motion.p>

            {/* Short Tagline - Minimalist */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-light"
            >
              חיפוש לפי תמונה. תוצאות מיידיות. קנייה חכמה.
            </motion.p>

            {/* CTA Button - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center mb-8 sm:mb-10"
            >
              <Button
                onClick={() => document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 sm:h-16 px-8 sm:px-10 md:px-12 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-full text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-rose-500/40 transition-all duration-300 flex items-center gap-3 group"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span>הצטרפי לרשימת ההמתנה</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-7 h-12 border-2 border-rose-400 rounded-full flex items-start justify-center p-2.5 shadow-lg backdrop-blur-sm bg-white/30">
            <motion.div 
              className="w-2 h-2 bg-rose-600 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-32 px-6 bg-gradient-to-b from-rose-50/80 via-pink-50/90 to-rose-100/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              איך זה עובד?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              העלי תמונה של לוק שאהבת - שמלה, חולצה או אאוטפיט שראית על מישהי אחרת.
              <br />
              <span className="text-rose-600 font-medium">Mesh מזהה את הבגדים שבתמונה ומציגה לך איפה למצוא אותם</span> — בדיוק, או פריטים דומים — ממאות אתרי אופנה.
              
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-100/50 border border-rose-100/50">
                    <step.icon className="w-14 h-14 text-rose-600" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mesh Section */}
      <section className="py-20 sm:py-32 px-6 bg-gradient-to-b from-rose-100/60 via-pink-50/80 to-rose-50/90">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              למה לבחור ב-Mesh?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMesh.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border border-rose-200/50 hover:border-rose-300 bg-gradient-to-br from-white/90 via-rose-50/80 to-pink-50/90 backdrop-blur-sm group">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-rose-50/50 group-hover:shadow-lg group-hover:shadow-rose-100/50 transition-all duration-300 border border-rose-100/50">
                      <feature.icon className="w-10 h-10 text-rose-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo/Mockup Section */}
      <section className="py-20 sm:py-32 px-6 bg-gradient-to-b from-rose-50/90 via-pink-50/70 to-rose-100/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              זה נראה בערך ככה 👇
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              הצצה למסך החיפוש של Mesh - חיפוש לפי תמונה, תוצאות חכמות, ומראה עדכני שתמיד יציג לך פיד מותאם אישית של בגדים.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Phone mockup container */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                  {/* Mock app interface */}
                  <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100/80 p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-2xl font-bold text-gray-900">MESH</div>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                          <Search className="w-5 h-5 text-rose-600" />
                        </div>
                        <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-rose-600" />
                        </div>
                      </div>
                    </div>

                    {/* Query image */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-rose-200 p-3 mb-4 shadow-lg">
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                        <Image src={queryImg} alt="תמונת החיפוש" fill className="object-cover" />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
                        <span className="font-semibold text-gray-900">תמונת החיפוש</span>
                        <span className="text-rose-600 flex items-center gap-1"><Search className="w-3.5 h-3.5" /> נמצא 4 התאמות</span>
                      </div>
                    </div>

                    {/* Results grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { img: topSuggestionImg, title: "הצעה מובילה", price: "₪189" },
                        { img: secondImg, title: "דומה מאוד", price: "₪159" },
                        { img: thirdImg, title: "דומה", price: "₪139" },
                        { img: fourthImg, title: "בהשראה", price: "₪129" },
                      ].map((card, idx) => (
                        <div key={idx} className="relative rounded-xl overflow-hidden aspect-square bg-white/95 backdrop-blur-sm shadow-md">
                          <Image src={card.img} alt={card.title} fill className="object-cover" />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-semibold">{card.title}</span>
                              <span className="bg-white/90 text-gray-900 rounded-full px-2 py-0.5 text-[10px]">{card.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/95 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-200/50 p-4 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">חיפוש חכם</div>
                    <div className="text-xs text-gray-500">AI מתקדם</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/95 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-200/50 p-4 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">קהילתי</div>
                    <div className="text-xs text-gray-500">50+ משתמשות</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="waitlist-section" className="py-20 sm:py-32 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 px-4 leading-tight">
              עידן חדש של חיפוש ויזואלי ומותאם אישית.
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 px-4 leading-relaxed max-w-4xl mx-auto">
              הצטרפי עכשיו למאות בנות שכבר נרשמו לרשימת ההמתנה ל-Mesh.
              <br />
              <span className="text-rose-400 font-semibold">גלי, השווי, שתפי - ואל תפספסי אף לוק.</span>
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                <Input
                  type="email"
                  placeholder="הכניסי את המייל שלך"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-16 text-lg sm:text-xl px-8 rounded-full border-2 border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 text-right focus:border-rose-500"
                  required
                  dir="rtl"
                />
                <Button
                  type="submit"
                  className="h-16 px-10 sm:px-12 bg-rose-600 hover:bg-rose-700 text-white rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-rose-500/50 transition-all duration-300 whitespace-nowrap flex items-center gap-3 justify-center"
                >
                  <Heart className="w-5 h-5" />
                  הצטרפי לרשימת ההמתנה
                  <Sparkles className="w-5 h-5" />
                </Button>
              </div>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 text-green-400 flex items-center justify-center gap-2 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                <span>תודה! נעדכן אותך בקרוב 💕</span>
              </motion.div>
            )}

            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500" />
                <span>ללא התחייבות</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500" />
                <span>גישה מוקדמת</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rose-500" />
                <span>עדכונים בלבד</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/logo.png" 
                alt="MESH Logo" 
                className="w-24 h-auto sm:w-28 max-w-full"
                style={{ 
                  display: 'block',
                  margin: '0 auto',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  padding: 0,
                  background: 'transparent'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">אודות</a>
            <a href="#" className="hover:text-white transition-colors">יצירת קשר</a>
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            © 2025 Mesh – כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}