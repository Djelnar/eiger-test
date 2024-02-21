let inputs = ['abcabcd', 'aa', 'ababaa']

function calculateCommonPrefixLength(s1 = '', s2 = '') {
  if (!s1 || !s2) {
    return s1.length || s2.length
  }
  let minLength = Math.min(s1.length, s2.length)
  let res = 0
  for (let i = 0; i < minLength; i++) {
    const e1 = s1[i]
    const e2 = s2[i]
    if (e1 === e2) res++
    else return res
  }
  return res
}

function commonPrefix(is) {
  let results = []
  for (let input of is) {
    let result = 0
    for (let idx in input) {
      let suffix = input.slice(idx)
      result += calculateCommonPrefixLength(suffix, input)
    }
    results.push(result)
  }
  return results
}

const results = commonPrefix(inputs)
console.log(results)
