import type { AccountModel } from '../../../domain/models/account'
import type { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import type { Encrypter } from '../../protocols/encrypter'

export default class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    const newAccount: AccountModel = {
      id: '',
      name: '',
      email: '',
      password: ''
    }
    return newAccount
  }
}
