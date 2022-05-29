import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type JobUrlDocument = JobUrl & Document;

@Schema()
export class JobUrl {
    @Prop({required:true})
    url: string;

    @Prop()
    portal:string;
}

export const JobUrlSchema = SchemaFactory.createForClass(JobUrl);