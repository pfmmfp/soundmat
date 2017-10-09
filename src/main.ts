import hi from './ex'

export default function(name: string) {
  console.log(`${hi} ${name}!`)
  ;[1, 2, 3].forEach(x => {
    if (x) console.log(x)
  })
  return new Array(1, 2, 3, 5)
}
