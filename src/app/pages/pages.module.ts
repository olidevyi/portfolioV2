import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";

@NgModule({
  imports: [],
  exports: [InicioComponent, SobreMiComponent],
  declarations: [InicioComponent, SobreMiComponent],
  providers: [],
})
export class PagesModule {}
