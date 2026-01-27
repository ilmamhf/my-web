import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Define types
type Position = {
  x: number;
  y: number;
};

type Velocity = {
  x: number;
  y: number;
};

// Random velocity generator
const randomVelocity = (): Velocity => ({
  x: (Math.random() - 0.5) * 8, // -4 to +4 pixels per frame
  y: (Math.random() - 0.5) * 8,
});

// Random position within screen
const randomPosition = (): Position => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
});

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const scale = useTransform(scrollY, [0, 600], [1, 0.6]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.5]);

  // State for positions and velocities
  const [redPos, setRedPos] = useState<Position>(randomPosition());
  const [bluePos, setBluePos] = useState<Position>(randomPosition());
  const [redVel, setRedVel] = useState<Velocity>(randomVelocity());
  const [blueVel, setBlueVel] = useState<Velocity>(randomVelocity());

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    const animate = (time: number) => {
      if (
        previousTimeRef.current !== null &&
        previousTimeRef.current !== undefined
      ) {
        const deltaTime = Math.min((time - previousTimeRef.current) / 16, 2); // Normalize and cap delta time

        // Update red blob position
        setRedPos((prev) => {
          let newX = prev.x + redVel.x * deltaTime;
          let newY = prev.y + redVel.y * deltaTime;
          let newVelX = redVel.x;
          let newVelY = redVel.y;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newVelX = -redVel.x;
            newX = Math.max(0, Math.min(newX, window.innerWidth));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVelY = -redVel.y;
            newY = Math.max(0, Math.min(newY, window.innerHeight));
          }

          // Update velocity state if it changed
          if (newVelX !== redVel.x || newVelY !== redVel.y) {
            setRedVel({ x: newVelX, y: newVelY });
          }

          return { x: newX, y: newY };
        });

        // Update blue blob position
        setBluePos((prev) => {
          let newX = prev.x + blueVel.x * deltaTime;
          let newY = prev.y + blueVel.y * deltaTime;
          let newVelX = blueVel.x;
          let newVelY = blueVel.y;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newVelX = -blueVel.x;
            newX = Math.max(0, Math.min(newX, window.innerWidth));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVelY = -blueVel.y;
            newY = Math.max(0, Math.min(newY, window.innerHeight));
          }

          // Update velocity state if it changed
          if (newVelX !== blueVel.x || newVelY !== blueVel.y) {
            setBlueVel({ x: newVelX, y: newVelY });
          }

          return { x: newX, y: newY };
        });
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [redVel, blueVel]);

  // Occasionally change direction for more organic movement
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance to change red velocity
        setRedVel(randomVelocity());
      }
      if (Math.random() > 0.7) {
        // 30% chance to change blue velocity
        setBlueVel(randomVelocity());
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // If blob is outside bounds after resize, adjust it
      setRedPos((prev) => ({
        x: Math.min(prev.x, window.innerWidth),
        y: Math.min(prev.y, window.innerHeight),
      }));
      setBluePos((prev) => ({
        x: Math.min(prev.x, window.innerWidth),
        y: Math.min(prev.y, window.innerHeight),
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      {/* RED BLOB - Using immediate transition for smooth frame-by-frame updates */}
      <motion.div
        animate={{ x: redPos.x, y: redPos.y }}
        transition={{ type: false }} // Immediate updates, no interpolation
        style={{ scale }}
        className="absolute w-[600px] h-[600px] rounded-full"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,77,71,0.7) 0%, rgba(255,77,71,0.3) 40%, transparent 70%)",
            filter: "blur(100px)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* BLUE BLOB - Using immediate transition for smooth frame-by-frame updates */}
      <motion.div
        animate={{ x: bluePos.x, y: bluePos.y }}
        transition={{ type: false }} // Immediate updates, no interpolation
        style={{ scale }}
        className="absolute w-[650px] h-[500px] rounded-full"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(71,80,255,0.6) 0%, rgba(71,80,255,0.25) 40%, transparent 70%)",
            filter: "blur(110px)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
