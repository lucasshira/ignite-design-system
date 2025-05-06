import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className='tokens-grid'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td style={{ fontFamily: 'monospace' }}>{key}</td>
              <td style={{ fontFamily: 'monospace' }}>{value}</td>
              {hasRemValue && <td style={{ fontFamily: 'monospace' }}>{parseFloat(value) * 16}px</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}