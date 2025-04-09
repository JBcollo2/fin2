import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Animation data for chart - starts with zero values
const initialChartData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 0 },
  { name: "Mar", value: 0 },
  { name: "Apr", value: 0 },
  { name: "May", value: 0 },
  { name: "Jun", value: 0 },
  { name: "Jul", value: 0 },
];

// Final values for chart
const finalChartData = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 19 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 32 },
  { name: "May", value: 38 },
  { name: "Jun", value: 42 },
  { name: "Jul", value: 48 },
];

// Final stats values
const statsData = [
  { label: "Projects Completed", value: 120, suffix: "+", change: "+24%" },
  { label: "Client Retention", value: 95, suffix: "%", change: "+7%" },
  { label: "Customer Rating", value: 4.8, suffix: "/5", change: "+0.3" },
];

const StatsSection = () => {
  // Refs for intersection observer
  const sectionRef = useRef(null);
  const chartRef = useRef(null);
  const statsRef = useRef(null);
  const detailsRef = useRef(null);
  
  // States for animations
  const [chartData, setChartData] = useState(initialChartData);
  const [countedStats, setCountedStats] = useState(statsData.map(stat => ({ ...stat, currentValue: 0 })));
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Handle scrolling animations
  useEffect(() => {
    // Create Intersection Observer instance
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Element needs to be 30% visible to trigger
    };

    // Chart animation observer
    const chartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Chart is visible!');
          setIsChartVisible(true);
        }
      });
    }, observerOptions);

    // Stats animation observer
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Stats are visible!');
          setIsStatsVisible(true);
        }
      });
    }, observerOptions);

    // Details animation observer
    const detailsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Details are visible!');
          setIsDetailsVisible(true);
        }
      });
    }, observerOptions);

    // Start observing
    if (chartRef.current) chartObserver.observe(chartRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (detailsRef.current) detailsObserver.observe(detailsRef.current);

    // Cleanup observers on component unmount
    return () => {
      if (chartRef.current) chartObserver.unobserve(chartRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
      if (detailsRef.current) detailsObserver.unobserve(detailsRef.current);
    };
  }, []);

  // Animate chart when visible
  useEffect(() => {
    if (!isChartVisible) return;
    
    console.log('Starting chart animation');

    let animationFrame;
    let startTime = null;
    const duration = 1500; // Animation duration in ms

    const animateChart = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newData = finalChartData.map((item, index) => ({
        name: item.name,
        value: Math.floor(progress * item.value),
      }));

      setChartData(newData);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateChart);
      }
    };

    animationFrame = requestAnimationFrame(animateChart);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isChartVisible]);

  // Animate stats counters when visible
  useEffect(() => {
    if (!isStatsVisible) return;
    
    console.log('Starting stats animation');

    let animationFrame;
    let startTime = null;
    const duration = 2000; // Animation duration in ms

    const animateStats = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newStats = statsData.map((stat) => {
        let currentValue;
        
        // Handle decimal values
        if (Number.isInteger(stat.value)) {
          currentValue = Math.floor(progress * stat.value);
        } else {
          currentValue = +(progress * stat.value).toFixed(1);
        }
        
        return {
          ...stat,
          currentValue,
        };
      });

      setCountedStats(newStats);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateStats);
      }
    };

    animationFrame = requestAnimationFrame(animateStats);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isStatsVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Technical Excellence
          </h2>
          <p className="text-gray-300">
            Our services are built on industry-leading expertise, innovative approaches, and a commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card 
            ref={chartRef} 
            className={`bg-futuristic-blue border-white/10 col-span-1 lg:col-span-2 overflow-hidden transition-all duration-1000 ${isChartVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-8'}`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Project Growth</CardTitle>
              <CardDescription>Monthly client engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#475569" />
                  <YAxis stroke="#475569" domain={[0, 50]} />
                  <CartesianGrid stroke="#1E293B" strokeDasharray="3 3" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#0F172A", 
                      borderColor: "#06B6D4",
                      borderRadius: "8px" 
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#06B6D4" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div 
            ref={statsRef} 
            className={`glass-effect rounded-xl transition-all duration-1000 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-8'}`}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
              <div className="space-y-8">
                {countedStats.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.currentValue}{stat.suffix}</p>
                    </div>
                    <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={detailsRef} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 transition-all duration-1000 ${isDetailsVisible ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-8'}`}
        >
          <div className="glass-effect rounded-2xl p-8 transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-6">Project Management Excellence</h3>
            <p className="text-gray-300 mb-4">
              We take an integrated approach to managing projects and ensuring their ongoing maintenance after completion.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-futuristic-cyan">01</span>
                </div>
                <div>
                  <h4 className="font-medium">On-Time Delivery</h4>
                  <p className="text-sm text-gray-400">Projects delivered within agreed timelines</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-futuristic-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-futuristic-cyan">02</span>
                </div>
                <div>
                  <h4 className="font-medium">Budget Adherence</h4>
                  <p className="text-sm text-gray-400">Maintaining financial discipline throughout project lifecycle</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-8 transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
            <p className="text-gray-300 mb-4">
              Our team brings specialized knowledge across multiple technology domains.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-futuristic-purple">01</span>
                </div>
                <div>
                  <h4 className="font-medium">Emerging Technologies</h4>
                  <p className="text-sm text-gray-400">AI, Blockchain, IoT implementations</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-futuristic-purple/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-futuristic-purple">02</span>
                </div>
                <div>
                  <h4 className="font-medium">Network Infrastructure</h4>
                  <p className="text-sm text-gray-400">Design, implementation and comprehensive management</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
