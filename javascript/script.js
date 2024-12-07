document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('sierpinskiCanvas')
  const ctx = canvas.getContext('2d')

  const N = 10000
  let sx = [0]
  let sy = [0]

  for (let i = 1; i < N; i++) {
    const k = Math.floor(Math.random() * 3) + 1
    sx[i] = sx[i - 1] / (k - 1)
    sy[i] = sy[i - 1]
    if (k === 2) {
      sy[i] += 2
    }
    ctx.fillRect(sx[i] * 100, sy[i] * 100, 1, 1)  
  }
})

