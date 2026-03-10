import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout/layout';

import { GuidelineEditor } from './pages/guideline-editor/guideline-editor';
import { PackageDetails } from './pages/package-details/package-details';
import { ComponentRegistry } from './pages/component-registry/component-registry';
import { GuidelinesLibrary } from './pages/guidelines-library/guidelines-library';
import { TechnicalGuidelines } from './pages/technical-guidelines/technical-guidelines';
import { InitializeRepository } from './pages/initialize-repository/initialize-repository';
import { ArchdocsAi } from './pages/archdocs-ai/archdocs-ai';
import { GuidelineApproval } from './pages/guideline-approval/guideline-approval';
import { ApiDetails } from './pages/api-details/api-details';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'guideline-editor', pathMatch: 'full' },
      { path: 'guideline-editor', component: GuidelineEditor },
      { path: 'package-details', component: PackageDetails },
      { path: 'component-registry', component: ComponentRegistry },
      { path: 'guidelines-library', component: GuidelinesLibrary },
      { path: 'technical-guidelines', component: TechnicalGuidelines },
      { path: 'initialize-repository', component: InitializeRepository },
      { path: 'archdocs-ai', component: ArchdocsAi },
      { path: 'guideline-approval', component: GuidelineApproval },
      { path: 'api-details', component: ApiDetails },
    ]
  }
];
