import { colors } from '@ignite-ui/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontFamily: 'monospace', 
          color: `${key === 'white' ? '#000' : '#fff'}`,
        }}>
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}