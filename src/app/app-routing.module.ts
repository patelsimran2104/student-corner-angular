import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './layouts/components/drawer/sidenav-list/payment/payment.component';
import { TranscriptComponent } from './layouts/components/drawer/sidenav-list/transcript/transcript.component';
import { ResultsComponent } from './layouts/components/drawer/sidenav-list/results/results.component';
import { DegreecertificateComponent } from './layouts/components/drawer/sidenav-list/degreecertificate/degreecertificate.component';
import { LogoutComponent } from './layouts/components/header/logout/logout.component';
import { FeedbackComponent } from './layouts/components/header/feedback/feedback.component';
import { HomeComponent } from './layouts/components/header/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  //{ path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path:'home', component: HomeComponent },
  { path:'feedback', component: FeedbackComponent },
  { path:'degreecertificate', component: DegreecertificateComponent },
  { path:'transcript', component: TranscriptComponent },
  { path:'results', component: ResultsComponent },
  { path:'payment', component: PaymentComponent },
  //{ path: '', component: LayoutsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
