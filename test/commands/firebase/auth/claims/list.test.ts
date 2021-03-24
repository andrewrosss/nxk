import {expect, test} from '@oclif/test'

describe('firebase:auth:claims:list', () => {
  test
  .stdout()
  .command(['firebase:auth:claims:list'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:auth:claims:list', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
