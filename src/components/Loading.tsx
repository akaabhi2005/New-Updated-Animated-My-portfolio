import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

/* ======================
   LOADING COMPONENT
====================== */
const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();

  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  /* percent watcher */
  useEffect(() => {
    if (percent >= 100) {
      const t1 = setTimeout(() => {
        setLoaded(true);

        const t2 = setTimeout(() => {
          setClicked(true);

          const t3 = setTimeout(() => {
            setIsLoading(false);
          }, 500);

          return () => clearTimeout(t3);
        }, 600);

        return () => clearTimeout(t2);
      }, 400);

      return () => clearTimeout(t1);
    }
  }, [percent, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <div className="loader-title">Abhishek Soni</div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span>A Creative Developer</span>
            <span>A Creative Designer</span>
            <span>A Creative Developer</span>
            <span>A Creative Designer</span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>

          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                Loading <span>{percent}%</span>
              </div>
              <div className="loading-box"></div>
            </div>

            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

/* ======================
   SET PROGRESS (REQUIRED)
====================== */
export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  let interval = setInterval(() => {
    if (percent < 90) {
      percent += Math.floor(Math.random() * 4) + 1;
      setLoading(percent);
    } else {
      clearInterval(interval);
    }
  }, 120);

  const loaded = () =>
    new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
        } else {
          clearInterval(interval);
          resolve(percent);
        }
      }, 10);
    });

  const clear = () => {
    clearInterval(interval);
    setLoading(100);
  };

  return { loaded, clear };
};
