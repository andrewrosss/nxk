import {expect, test} from '@oclif/test'

describe('firebase:auth:claims:set', () => {
  test
  .stdout()
  .command(['firebase:auth:claims:set'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:auth:claims:set', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
