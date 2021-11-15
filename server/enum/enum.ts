/*
There's probably a better place for this sort of stuff, I generally prefer to co-locate types/enums if possible.
Unfortunately, requiring server-defined enums on the client-side results in loading the entirety of the file it's contained in,
which leads to client-side errors.

This is likely a result of how enums are handled under the hood with TypeScript.
*/

export enum TooltipIdentifier {
  COVER_PAGE = 'COVER_PAGE',
  EXPERIENCE_PAGE = 'EXPERIENCE_PAGE',
  PROJECTS_PAGE = 'PROJECTS_PAGE'
}
