import { BrowseViewModel } from './timeline-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new BrowseViewModel()
}
