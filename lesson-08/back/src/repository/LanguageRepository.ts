import { injectable } from "tsyringe";
import { DeepPartial, getConnection, Like } from "typeorm";
import { LanguageEntity } from "../entity/LanguageEntity";
import { Language } from "../types/language";
import { GenreEntity } from "../entity/GenreEntity";

@injectable()
export class LanguageRepository implements Language.Repository {
  async create(languageData: DeepPartial<LanguageEntity>): Promise<LanguageEntity> {
    return await getConnection().getRepository(LanguageEntity).save(languageData);
  }

  async delete(language: LanguageEntity): Promise<void> {
    await getConnection().getRepository(LanguageEntity).delete(language);
  }

  async getAll(): Promise<LanguageEntity[]> {
    return await getConnection().getRepository(LanguageEntity).find();
  }

  async getById(languageId: string | number): Promise<LanguageEntity | undefined> {
    return await getConnection().getRepository(LanguageEntity).findOne(languageId);
  }

  async hasExist(name: string): Promise<boolean> {
    return !!(await getConnection().getRepository(LanguageEntity).count({
      where: { name },
    }));
  }

  async search(name: string): Promise<LanguageEntity[]> {
    const searchString = `%${name.replace(/\s+/gi, "%")}%`;

    return await getConnection()
      .getRepository(LanguageEntity)
      .find({ name: Like<string>(searchString) });
  }

  async update(languageId: number | string, languageData: DeepPartial<LanguageEntity>): Promise<LanguageEntity> {
    await getConnection().getRepository(LanguageEntity).update(languageId, languageData);

    return await getConnection().getRepository(LanguageEntity).findOne(languageId);
  }
}
