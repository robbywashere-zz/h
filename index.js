
import { h, app } from "hyperapp"
import picostyle from "picostyle"

const p = picostyle(h)

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const Banner = p("h1")({
  display: "inline-block",
  width: "100%",
  top: "0",
  paddingTop: "0",
  color: 'palevioletred',
  textAlign: "center",
  backgroundColor: 'papayawhip',
})
const Row = p("div")({
  textAlign: "center",
  width: "100%"
})
const Box = p("div")({
  backgroundColor: 'papayawhip',
  minWidth: "200px",
  width: "25vw",
  margin: "auto",
  height: "25vh",
  borderRadius: "11px",
  border: '1px solid palevioletred'
});
const Button = p("button")({
  backgroundColor: 'papayawhip',
  color: 'palevioletred',
  ":active": {
    backgroundColor: "palevioletred",
    color: 'papayawhip',
  },
  padding: '3em',
  borderRadius: '5px',
  border: '1px solid palevioletred',
  fontWeight: "bold",
  margin: "1em"
})

const view = (state, actions) => (
  <Box>
    <Banner>{state.count}</Banner>
    <Row>
      <Button onclick={() => actions.down(1)}>-</Button>
      <Button onclick={() => actions.up(1)}>+</Button>
    </Row>
  </Box>
)

app(state, actions, view, document.body)
