module.exports = {
  redirects: [
    //Static Redirects
    {
      from: "/release-notes",
      to: "/release-notes/whats-new",
    },
    {
      from: "/docs",
      to: "/docs/category/documentation",
    },
    
    
    //===================================================================================
    // 
    //  H O W   T O   A D D   R E D I R E C T S
    //
    //  - Use the form in the example below. 
    //  - Create a redirect for each target page or folder on DevHub. 
    //  - Remove the forward-slash characters that comment out the lines of the example object.
    //  - Note the use of commas.
    //
    //  Created by User for PR-123 on Jan 14, 2023
    //  {
    //    from: "/docs/platform/delegates/delegate-guide/automate-delegate-installation",
    //    to: "/docs/platform/delegates/installation",
    //  },    
    //===================================================================================
    
    
    // DELEGATE NODE
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegates-overview",
         to: "/docs/platform/delegates/get-started-with-delegates/delegates-overview",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-installation-overview",
         to: "/docs/platform/delegates/get-started-with-delegates/delegate-installation-overview",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/build-custom-delegate-images-with-third-party-tools",
         to: "/docs/platform/delegates/get-started-with-delegates/build-custom-delegate-images-with-third-party-tools",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-auto-update",
         to: "/docs/platform/delegates/get-started-with-delegates/delegate-auto-update",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-how-tos",
         to: "/docs/platform/delegates/get-started-with-delegates/delegate-how-tos",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-image-types",
         to: "/docs/platform/delegates/get-started-with-delegates/delegate-image-types",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-reference/delegate-requirements-and-limitations",
         to: "/docs/platform/delegates/get-started-with-delegates/delegate-requirements-and-limitations",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/enable-root-user-privileges-to-add-custom-binaries",
         to: "/docs/platform/delegates/get-started-with-delegates/enable-root-user-privileges-to-add-custom-binaries",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/install-delegates-with-third-party-tools",
         to: "/docs/platform/delegates/get-started-with-delegates/install-delegates-with-third-party-tools",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/support-for-delegate-docker-images",
         to: "/docs/platform/delegates/get-started-with-delegates/support-for-delegate-docker-images",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/install-a-kubernetes-delegate",
         to: "/docs/platform/delegates/install-delegates/kubernetes-delegates/install-a-kubernetes-delegate",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-install-kubernetes/install-harness-delegate-on-kubernetes",
         to: "/docs/platform/delegates/install-delegates/kubernetes-delegates/install-harness-delegate-on-kubernetes",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-install-kubernetes/install-harness-delegate-using-helm",
         to: "/docs/platform/delegates/install-delegates/kubernetes-delegates/install-harness-delegate-using-helm",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-install-docker/install-a-docker-delegate",
         to: "/docs/platform/delegates/install-delegates/docker-delegates/install-a-docker-delegate",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/delegates/delegate-guide/automate-delegate-installation",
         to: "/docs/platform/delegates/advanced-installation/automate-delegate-installation",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/install-a-delegate-with-3-rd-party-tool-custom-binaries",
         to: "/docs/platform/delegates/advanced-installation/install-a-delegate-with-3-rd-party-tool-custom-binaries",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/non-root-delegate-installation",
         to: "/docs/platform/delegates/advanced-installation/non-root-delegate-installation",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/custom-delegate",
         to: "/docs/platform/delegates/customize-delegates/custom-delegates",
       },   
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/configure-delegate-proxy-settings",
         to: "/docs/platform/delegates/configure-delegates/configure-delegate-proxy-settings",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/run-scripts-on-delegates",
         to: "/docs/platform/delegates/configure-delegates/run-scripts-on-delegates",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-registration",
         to: "/docs/platform/delegates/manage-delegates/delegate-registration",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delete-a-delegate",
         to: "/docs/platform/delegates/manage-delegates/delete-a-delegate",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/select-delegates-with-selectors",
         to: "/docs/platform/delegates/manage-delegates/select-delegates-with-selectors",
       },  
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/secure-delegates-with-tokens",
         to: "/docs/platform/delegates/secure-delegates/secure-delegates-with-tokens",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/trust-store-override-for-delegates",
         to: "/docs/platform/delegates/secure-delegates/trust-store-override-for-delegates",
       },
   
    
    
  ],
};
