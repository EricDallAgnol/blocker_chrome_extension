/**
 * Add here the websites you want to block
 */
websiteToBlock = ["||youtube.com", "||facebook.com"]


/**
 * Generate the rules from the websites selected
 */
function generateRulesFromWebsiteList() {
    return websiteToBlock.map((website, index) => { return {
        id: index + 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { url: chrome.runtime.getURL("default_page.html") },
        },
        condition: {
          urlFilter: website,
          resourceTypes: ["main_frame"],
        }
    }
      })
}


/**
 * Activates the rules for the above websites selected
 */
function activateRules() {
    rules = generateRulesFromWebsiteList();
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        addRules: rules,
        removeRuleIds: rules.map((value) => value.id),
      },
      () => {
        console.log(`Rule(s) added`);
      }
    );
  }

  activateRules();