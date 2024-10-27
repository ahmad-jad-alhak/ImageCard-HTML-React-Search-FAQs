import { ISPFXContext, spfi, SPFI, SPFx } from "@pnp/sp";
import { Logger, LogLevel } from "@pnp/logging";

let spInstance: SPFI | null = null;

/**
 * Initializes and returns the PnPjs SPFI instance using the provided SharePoint context.
 * This ensures that the SPFI instance is initialized only once and reused.
 *
 * @param context - The SharePoint context (ISPFXContext)
 * @param siteUrl - The SharePoint site URL (optional). If not provided, it will use the current site URL.
 * @returns SPFI - The initialized PnPjs instance
 */
export const useSPContext = (context: ISPFXContext, siteUrl?: string): SPFI => {
  if (!spInstance) {
    Logger.write(
      "Initializing PnPjs with SharePoint context....",
      LogLevel.Info
    );

    console.log("siteUrl");
    console.log(siteUrl);
    
    // Use the provided siteUrl or default to the current site URL
    const resolvedSiteUrl = siteUrl || context.pageContext.web.absoluteUrl;

    try {
      spInstance = spfi(resolvedSiteUrl).using(SPFx(context)); // Initialize the SPFI instance
      Logger.write("PnPjs initialized successfully.", LogLevel.Info);
    } catch (error) {
      Logger.write(
        `Error initializing PnPjs: ${error.message}`,
        LogLevel.Error
      );
      throw new Error("Failed to initialize PnPjs.");
    }
  }

  return spInstance;
};
