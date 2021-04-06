import { IPodcastService } from "../contracts/iPodcastService";
import { Result } from "../infra/result";
import { Podcast } from "../models/podcast";
import { PodcastRepository } from "../repository/podcastRepository";

export class PodcastService implements IPodcastService {

    async get(_id: string): Promise<Podcast> {
        let result = await PodcastRepository.findById(_id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result<Podcast>> {
        let result = new Result<Podcast>();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await PodcastRepository.count({});
        result.Data = await PodcastRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }

}