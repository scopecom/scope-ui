import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ScUiArticleComponent } from '../app/components/scui-article/scui-article.component';

storiesOf('Data Display', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ScUiArticleComponent]
    })
  );

