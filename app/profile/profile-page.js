import { BrowseViewModel } from './profile-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new BrowseViewModel()
}
