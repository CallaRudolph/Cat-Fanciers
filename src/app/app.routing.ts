import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { GroupComponent } from './group/group.component';
import { AdminComponent } from './admin/admin.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
