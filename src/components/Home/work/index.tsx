"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";
import { FadeIn, StaggerContainer } from "../Animations";

const Work = () => {
  const services = [
    {
      icon: "/images/icons/icon-consulting.svg",
      text: "Blockchain Consulting",
      desc: "Expert guidance for your decentralized journey."
    },
    {
      icon: "/images/icons/icon-blockchain.svg",
      text: "Blockchain Solutions",
      desc: "Robust infrastructure for the future of finance."
    },
    {
      icon: "/images/icons/icon-Services.svg",
      text: "Custom Development",
      desc: "Tailored smart contracts and dApps."
    },
    {
      icon: "/images/icons/icon-bag.svg",
      text: "Asset Management",
      desc: "Secure storage and portfolio growth."
    }
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-12 items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-7 col-span-12 text-center lg:text-start order-2 lg:order-1">
            <StaggerContainer>
              <FadeIn direction="up">
                <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                  Work with us
                </span>
                <h2 className="text-white text-28 sm:text-36 md:text-44 lg:text-54 font-bold leading-tight mb-8 sm:mb-10 md:mb-12">
                  Launch your <span className="text-secondary tracking-tight">blockchain</span> project.
                </h2>
              </FadeIn>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {services.map((service, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-4 sm:p-5 md:p-6 rounded-2xl bg-darklight/30 border border-white/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-4 sm:mb-6 mx-auto lg:mx-0">
                        <Image
                          src={`${getImagePrefix()}${service.icon}`}
                          alt={service.text}
                          width={24}
                          height={24}
                          className="sm:w-7 sm:h-7"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.text}</h3>
                      <p className="text-muted/70 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 col-span-12 flex justify-center items-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-full order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[680px] w-full">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image
                    src={`${getImagePrefix()}images/timeline/img-timeline.png`}
                    alt="Process Visualization"
                    width={550}
                    height={350}
                    className="relative z-10 w-full h-auto mx-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 transition-opacity"
                  />
               
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
