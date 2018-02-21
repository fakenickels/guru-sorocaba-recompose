import { compose, withStateHandlers, withHandlers } from 'recompose'

export default compose(
  withStateHandlers({
    name: "",
    data: null,
    isFetching: false,
  }, {
    setName: state => name => ({ ...state, name }),
    setData: state => data => ({ ...state, data }),
    setIsFetching: state => isFetching => ({ ...state, isFetching }),
  }),

  withHandlers({
    fetchPokemon: (props) => () => {
      props.setIsFetching(true)
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
        .then(res => res.json())
        .then(data => {
          props.setIsFetching(false)
          props.setData(data)
        })
    }
  })
)
