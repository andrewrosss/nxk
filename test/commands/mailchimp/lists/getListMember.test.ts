import {expect, test} from '@oclif/test'

describe('mailchimp:lists:getListMember', () => {
  test
  .stdout()
  .command(['mailchimp:lists:getListMember'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mailchimp:lists:getListMember', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
