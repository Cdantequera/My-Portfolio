export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 520 200" 
      className={className} 
      role="img" 
      aria-label="Daniel Antequera Logo"
    >
      <defs>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="1" />
        </linearGradient>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glowStrong" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Las fuentes de Google las pasamos como un string dentro de style */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;600&family=Share+Tech+Mono&display=swap');

          .name-main {
            font-family: 'Rajdhani', 'Trebuchet MS', sans-serif;
            font-weight: 600;
            font-size: 38px;
            letter-spacing: 6px;
            fill: #E8F4FF;
            text-transform: uppercase;
          }
          .name-last {
            font-family: 'Rajdhani', 'Trebuchet MS', sans-serif;
            font-weight: 300;
            font-size: 38px;
            letter-spacing: 6px;
            fill: #7BBFFF;
            text-transform: uppercase;
          }
          .tagline {
            font-family: 'Share Tech Mono', 'Courier New', monospace;
            font-size: 10px;
            letter-spacing: 4px;
            fill: #00F0FF;
            text-transform: uppercase;
            opacity: 0.85;
          }
        `}</style>
      </defs>
      <g opacity="0.04" stroke="#00F0FF" strokeWidth="0.5">
        <line x1="0" y1="40" x2="520" y2="40"/>
        <line x1="0" y1="80" x2="520" y2="80"/>
        <line x1="0" y1="120" x2="520" y2="120"/>
        <line x1="0" y1="160" x2="520" y2="160"/>
        <line x1="80" y1="0" x2="80" y2="200"/>
        <line x1="160" y1="0" x2="160" y2="200"/>
        <line x1="240" y1="0" x2="240" y2="200"/>
        <line x1="320" y1="0" x2="320" y2="200"/>
        <line x1="400" y1="0" x2="400" y2="200"/>
        <line x1="480" y1="0" x2="480" y2="200"/>
      </g>

      <polygon points="78,28 106,44 106,76 78,92 50,76 50,44" fill="none" stroke="url(#accentGrad)" strokeWidth="1.5" opacity="0.6" filter="url(#glow)" />
      <polygon points="78,38 98,49 98,71 78,82 58,71 58,49" fill="none" stroke="url(#accentGrad)" strokeWidth="1" opacity="0.9" />

<rect x="73" y="49" width="3" height="25" fill="url(#accentGrad)" rx="0.5"
  transform="rotate(18, 68.5, 61)"/>
<rect x="80" y="50" width="3" height="22" fill="url(#accentGrad)" rx="0.5"
  transform="rotate(-18, 81.5, 61)"/>
<rect x="73" y="62" width="10" height="2.5" fill="url(#accentGrad)" rx="0.5"/>

      <g stroke="#00F0FF" strokeWidth="1.2" opacity="0.5">
        <polyline points="50,54 46,54 46,46 54,46" fill="none"/>
        <polyline points="106,57 110,57 110,65 102,65" fill="none"/>
      </g>

      <line x1="126" y1="30" x2="126" y2="130" stroke="url(#accentGrad)" strokeWidth="0.8" opacity="0.4"/>

      <text x="120" y="100" className="name-main">DANIEL
        <tspan className="name-last"> ANTEQUERA</tspan>
      </text>


      <line x1="144" y1="124" x2="490" y2="124" stroke="#1A2E4A" strokeWidth="1"/>
      <line x1="144" y1="124" x2="220" y2="124" stroke="url(#accentGrad)" strokeWidth="1.5" filter="url(#glow)"/>

      <circle cx="144" cy="124" r="2.5" fill="#00F0FF" filter="url(#glow)"/>
      <circle cx="220" cy="124" r="1.5" fill="#0066FF" opacity="0.7"/>

      <g opacity="0.3" stroke="#00F0FF" strokeWidth="0.8">
        <polyline points="490,20 500,20 500,30" fill="none"/>
      </g>
      <g opacity="0.3" stroke="" strokeWidth="0.8">
        <polyline points="30,170 20,170 20,180" fill="none"/>
      </g>

      <rect x="0" y="96" width="520" height="1" fill="#00F0FF" opacity="0.03"/>
      <rect x="0" y="104" width="520" height="1" fill="#00F0FF" opacity="0.02"/>
    </svg>
  );
};