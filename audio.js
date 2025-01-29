document.getElementById('start').addEventListener('click', async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const analyzer = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      
      source.connect(analyzer);
      analyzer.fftSize = 512;
      
      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const bars = document.querySelectorAll('.bar');
  
      function animate() {
        analyzer.getByteFrequencyData(dataArray);
        
        bars.forEach((bar, i) => {
          const value = dataArray[i] / 2;
          bar.style.height = `${value}em`;
        });
  
        requestAnimationFrame(animate);
      }
      
      animate();
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  });