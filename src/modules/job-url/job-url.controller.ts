import { Body, Controller, Res } from "@nestjs/common";
import { JobUrlService } from "./job-url.service";
import { JobUrl } from "./models/job-url.schema";

@Controller('jobUrls')
export class JobUrlController {
    
    
    constructor(private readonly jobUrlService: JobUrlService){
        
    }

    public async create(@Res() response, @Body() jobUrl: JobUrl){
        
    }
}