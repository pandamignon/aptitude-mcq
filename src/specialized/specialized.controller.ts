import { Controller, Get } from '@nestjs/common';
import { SpecializedService } from './specialized.service';

@Controller('specialized')
export class SpecializedController {
  constructor(private readonly specializedService: SpecializedService) {}
  @Get('m5')
  getSpecializedM5() {
    return this.specializedService.m5();
  }
  @Get('m4h1')
  getSpecializedM4H1() {
    return this.specializedService.m4h1();
  }
  @Get('m3h2')
  getSpecializedM3H2() {
    return this.specializedService.m3h2();
  }
  @Get('m2h3')
  getSpecializedM2H3() {
    return this.specializedService.m2h3();
  }
  @Get('m1h4')
  getSpecializedM1H4() {
    return this.specializedService.m1h4();
  }
  @Get('m4e1')
  getSpecializedM4E1() {
    return this.specializedService.m4e1();
  }
  @Get('m3e2')
  getSpecializedM3E2() {
    return this.specializedService.m3e2();
  }@Get('m2e3')
  getSpecializedM2E3() {
    return this.specializedService.m2e3();
  }@Get('m1e4')
  getSpecializedM1E4() {
    return this.specializedService.m1e4();
  }
}
