import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Background animation
const initBackgroundAnimation = () => {
  const noise = {
    grad3: new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),
    p: new Uint8Array(256),
    perm: new Uint8Array(512),
    seed(seed) {
      if(seed > 0 && seed < 1) seed *= 65536;
      seed = Math.floor(seed);
      if(seed < 256) seed |= seed << 8;
      for(let i = 0; i < 256; i++) {
        let v;
        if (i & 1) v = this.p[i] ^ (seed & 255);
        else v = this.p[i] ^ ((seed>>8) & 255);
        this.perm[i] = this.perm[i + 256] = v;
      }
    },
    perlin2(x, y) {
      const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
      x -= Math.floor(x); y -= Math.floor(y);
      const fx = (3 - 2*x)*x*x, fy = (3 - 2*y)*y*y;
      const p0 = this.perm[X]+Y, p1 = this.perm[X+1]+Y;
      return (1 - fy) * (
        (1 - fx) * this.grad2(this.perm[p0], x, y) +
        fx * this.grad2(this.perm[p1], x-1, y)
      ) + fy * (
        (1 - fx) * this.grad2(this.perm[p0+1], x, y-1) +
        fx * this.grad2(this.perm[p1+1], x-1, y-1)
      );
    },
    grad2(hash, x, y) {
      const h = hash & 15;
      const grad_x = 1 + (h & 7);
      const grad_y = (h & 8) ? -1 : 1;
      return (grad_x * x + grad_y * y);
    }
  };

  let stageW = 0;
  let stageH = 0;
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }
  const context = canvas.getContext("2d");

  noise.seed(Math.random());
  resize();
  tick();

  window.addEventListener("resize", resize);

  function tick() {
    requestAnimationFrame(tick);
    const time = Date.now() / 4000;
    draw(time);
  }

  function draw(time) {
    context.clearRect(0, 0, stageW, stageH);
    context.lineWidth = 1;
    const amplitude = stageH / 4;
    const lineNum = 50;
    const segmentNum = 150;

    [...Array(lineNum).keys()].forEach((j) => {
      const coefficient = 50 + j;
      context.beginPath();
      const hue = 200 + (j / lineNum) * 40;
      const opacity = 0.1 + (j / lineNum) * 0.2;
      context.strokeStyle = `hsla(${hue}, 80%, 50%, ${opacity})`;

      [...Array(segmentNum).keys()].forEach((i) => {
        const x = (i / (segmentNum - 1)) * stageW;
        const px = i / coefficient;
        const py = j / 50 + time;
        const y = amplitude * noise.perlin2(px, py) + stageH / 2;
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });
      context.stroke();
    });
  }

  function resize() {
    stageW = window.innerWidth;
    stageH = window.innerHeight;
    canvas.width = stageW;
    canvas.height = stageH;
  }
};

// Initialize background animation after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBackgroundAnimation);