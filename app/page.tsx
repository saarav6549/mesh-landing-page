"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Camera, Sparkles, Users, Heart, ShoppingBag, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const features = [
    {
      icon: Camera,
      title: "חיפוש חזותי AI",
      description: "צלמי צילום מסך ומצאי את הפריטים המדויקים תוך שניות"
    },
    {
      icon: Users,
      title: "תוכן משפיענים",
      description: "גלי סטייל מהאנשים שאת הכי סומכת עליהם"
    },
    {
      icon: Heart,
      title: "ארון וירטואלי",
      description: "שמרי את הפריטים האהובים עלייך למעקב עתידי"
    },
    {
      icon: Sparkles,
      title: "פיד מותאם אישית",
      description: "המלצות המותאמות בדיוק לסטייל שלך"
    },
    {
      icon: Users,
      title: "קהילת אופנה",
      description: "שתפי דעות וקבלי חוות דעת על כל פריט"
    },
    {
      icon: ShoppingBag,
      title: "קניה ישירה",
      description: "מהשראה לרכישה בכמה קליקים בלבד"
    }
  ];

  const stats = [
    { value: "50+", label: "משתמשות מוקדמות" },
    { value: "AI", label: "טכנולוגיית חיפוש מתקדמת" },
    { value: "24/7", label: "זמינות מלאה" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-rose-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight">
                <span className="bg-gradient-to-l from-rose-700 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                  MESH
                </span>
              </h1>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight px-4"
            >
              ראית אאוטפיט ברשת?
              <br />
              <span className="text-rose-700">כל הפרטים במקום אחד</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed px-4"
            >
              פלטפורמת גילוי אופנה מבוססת AI שמחברת בין השראת סטייל לקנייה חכמה
            </motion.p>

            {/* CTA Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto px-4"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                  <Input
                    type="email"
                    placeholder="הכניסי את המייל שלך"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-16 text-lg sm:text-xl px-8 rounded-full border-2 border-rose-200 focus:border-rose-500 text-right"
                    required
                    dir="rtl"
                  />
                  <Button
                    type="submit"
                    className="h-16 px-10 sm:px-12 bg-gradient-to-l from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
                  >
                    הצטרפי לרשימת ההמתנה
                  </Button>
                </div>
              </form>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-green-600 flex items-center justify-center gap-2 text-lg"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span>תודה! נעדכן אותך בקרוב 💕</span>
                </motion.div>
              )}
              
              <p className="text-base sm:text-lg text-gray-500 mt-6">הצטרפי ל-50+ נשים שכבר נרשמו</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto px-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-l from-rose-700 to-pink-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-white to-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              הדרך הישנה לעומת הדרך של MESH
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              דור Z דורש תשובות מיידיות,לא חיפוש ידני ואיטי
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <Card className="p-8 sm:p-10 bg-gray-50 border-2 border-gray-200 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl sm:text-4xl">⌨️</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">הדרך הישנה</h3>
                </div>
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
                  הקלדת &ldquo;שמלת קורסט אדומה מסאטן&rdquo; מניבה תוצאות לא רלוונטיות וחיפושים נטושים
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600 text-base sm:text-lg">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full flex-shrink-0" />
                    <span>איטי ומתסכל</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-base sm:text-lg">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full flex-shrink-0" />
                    <span>תוצאות לא מדויקות</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-base sm:text-lg">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full flex-shrink-0" />
                    <span>ויתור על הרכישה</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center order-3 md:order-2">
              <motion.div
                animate={{ x: [-10, 0, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-16 h-16 lg:w-20 lg:h-20 text-rose-500" />
              </motion.div>
            </div>

            {/* Mesh Way */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-3"
            >
              <Card className="p-8 sm:p-10 bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 shadow-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-l from-rose-700 to-pink-600 bg-clip-text text-transparent">
                    הדרך של MESH
                  </h3>
                </div>
                <p className="text-gray-900 text-lg sm:text-xl leading-relaxed font-semibold mb-6">
                  צילום מסך אחד מוצא את ההתאמה המדויקת תוך שניות, והופך השראה לרכישה
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-rose-700 text-base sm:text-lg">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-semibold">מיידי ומדויק</span>
                  </div>
                  <div className="flex items-center gap-3 text-rose-700 text-base sm:text-lg">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-semibold">מותאם אישית</span>
                  </div>
                  <div className="flex items-center gap-3 text-rose-700 text-base sm:text-lg">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="font-semibold">מהשראה לקנייה</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              איך זה עובד?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 px-4">
              שלושה שלבים פשוטים מהשראה לרכישה
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                step: "01",
                icon: Camera,
                title: "צלמי צילום מסך",
                description: "ראית אאוטפיט שאהבת ב-TikTok או Instagram? פשוט צלמי צילום מסך"
              },
              {
                step: "02",
                icon: Sparkles,
                title: "AI מוצא בשבילך",
                description: "הטכנולוגיה שלנו מזהה את הפריט ומוצאת אותו או דומים לו"
              },
              {
                step: "03",
                icon: ShoppingBag,
                title: "קני בקליק",
                description: "עברי ישירות לרכישה או שמרי לארון הווירטואלי שלך"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 sm:p-10 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-rose-200 h-full">
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                        <item.icon className="w-12 h-12 sm:w-14 sm:h-14 text-rose-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-4">
              כל מה שצריך במקום אחד
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 px-4 leading-relaxed">
              חיפוש חזותי AI + תוכן משפיענים + אינטראקציה חברתית
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-rose-200 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-white to-rose-50/50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 sm:w-10 sm:h-10 fill-rose-500 text-rose-500" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 px-4">
              &ldquo;סוף סוף פתרון לבעיה שהכי ציקה לי!&rdquo;
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 px-4">
              הצטרפי לעשרות נשים שכבר נרשמו לרשימת ההמתנה
            </p>
            <div className="grid sm:grid-cols-3 gap-10 sm:gap-12 mt-16">
              {[
                { icon: TrendingUp, text: "שוק של $380B בארה&ldquo;ב" },
                { icon: Users, text: "150M קוניות דיגיטליות" },
                { icon: Sparkles, text: "טכנולוגיית AI מתקדמת" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <p className="text-gray-800 font-semibold text-lg sm:text-xl">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-br from-rose-600 via-rose-700 to-pink-700">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 px-4 leading-tight">
              מוכנה לשנות את הדרך שבה את קונה אופנה?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-rose-100 mb-12 px-4">
              הצטרפי לרשימת ההמתנה וקבלי גישה מוקדמת
            </p>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                <Input
                  type="email"
                  placeholder="הכניסי את המייל שלך"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-16 text-lg sm:text-xl px-8 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder:text-rose-200 text-right"
                  required
                  dir="rtl"
                />
                <Button
                  type="submit"
                  className="h-16 px-10 sm:px-12 bg-white hover:bg-gray-100 text-rose-700 rounded-full text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
                >
                  הצטרפי עכשיו
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-l from-rose-400 to-pink-400 bg-clip-text text-transparent">
            MESH
          </h3>
          <p className="text-gray-400 text-lg sm:text-xl mb-8">
            פלטפורמת גילוי אופנה מבוססת AI
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            © 2025 MESH. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
