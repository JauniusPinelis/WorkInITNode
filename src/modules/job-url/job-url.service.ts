import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobUrl, JobUrlDocument } from "./models/job-url.schema";

export class JobUrlService {
    
    
    constructor(@InjectModel(JobUrl.name) private JobUrlModel: Model<JobUrlDocument>) {

    }

    async create (jobUrl:JobUrl): Promise<JobUrl>{
        const newJoburl = new this.JobUrlModel(jobUrl);
        return newJoburl.save();
    }

    async getAll(): Promise<JobUrl[]>{
        return await this.JobUrlModel.find().exec();
    }

    async getById(id: string) : Promise<JobUrl> {
        return this.JobUrlModel.findById(id).exec();
    }

    async delete(id): Promise<any> {
        return await this.JobUrlModel.findByIdAndRemove(id);
    }
}