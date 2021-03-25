import {expect, test} from '@oclif/test'

describe('firebase:firestore:collection:getAll', () => {
  test
  .stdout()
  .command(['firebase:firestore:collection:getAll'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:firestore:collection:getAll', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
