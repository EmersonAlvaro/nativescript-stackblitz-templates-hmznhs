import { BrowseViewModel } from './event-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new BrowseViewModel()
}
