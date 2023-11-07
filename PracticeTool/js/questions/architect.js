let architectList = [
    {
        "title": "An enterprise client is on-boarding an AEM Desktop application to provide authors with the ability to load the AEM repository virtually on the file system. The desktop application is unable to connect to the AEM Author, which has SSL enabled. The intermediate certificate is installed on Apache.\nHow should an Architect resolve this issue? (Choose one.)\n",
        "options": [
            "Install the certificate chain to the keystore of the AEM authentication service user.\n",
            "Install the Root certificate to the AEM truststore.\n",
            "Install the certificate chain to the AEM truststore.\n",
            "Install the certificate chain to the keystore of the AEM ssl-service user.\n"    
        ],
        "answers": [
            "D"    
        ],
        "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/ssl-by-default.html?lang=en#enabling-ssl-by-default"
    },
    {
        "title": "A client's site does not show the latest page content for some site visitors. The client has two data centers with each configured with a Dispatcher connected to two Publish machines. The site load issue only occurs intermittently for visitors from one of the data centers.\nWhich step should the Architect take to resolve the issue? (Choose one.)\n",
        "options": [
            "Disable caching on all impacted data centers Dispatchers to force the Publish machines to serve the page content.\n",
            "Review the log files on the Author instances to determine if there are any template errors.\n",
            "Check the Publish instance(s) attached to the Dispatcher associated to the impacted data center.\n",
            "Check the SSL certificate on the impacted data center's load balancer.\n"    
        ],
        "answers": [
            "C"    
        ],
        "docs": "Al ser un problema intermitente tiene que ser relativo a uno de los publishers"
    },
    {
        "title": "A large retail customer is building their ecommerce platform on AEM. Several third-party vendors sell products through their site. Those vendors need to review and verify the content close to production before the content goes live and the customer wants to provide them a restricted environment.\nWhich approach should the Architect recommend? (Choose one.)\n",
        "options": [
            "Export content as PDF and share with the vendors.\n",
            "Give third-party vendors access to the Author Server.\n",
            "Add a Publish (preview) Server and provide access.\n",
            "Use the Preview Capabilities of AEM Author Server.\n"    
        ],
        "answers": [
            "C"    
        ],
        "docs": "Si los usuarios no deben tener acceso a Author se debe hacer con un entorno Preview"
    },
    {
        "title": "A news agency editor wants to publish news articles to an intermediate Publish (preview) instance for internal review before publishing the article to production Publish instance.\nWhich two steps should the Architect recommend? (Choose two.)\n",
        "options": [
            "Create a reverse replication agent on preview server.\n",
            "Create a custom publish workflow.\n",
            "Create a closed user group (CUG) for editors.\n",
            "Set up a new replication agent for preview server.\n",
            "Create a separate live copy to preview content.\n"
        ],
        "answers": [
            "B","D"    
        ],
        "docs": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/authoring/fundamentals/previewing-content.html?lang=en "
    },
    {
        "title": "A company with various departments wants to use tagging to improve search capability. Each department is restricted to use its own tags.\nHow should an Architect organize the tags? (Choose one.)\n",
        "options": [
            "Create a namespace for each department.\n",
            "Use department ID as a prefix of each tag.\n",
            "Create tags in 'departmentName:tagName' format.\n",
            "Create a department sub-tag in each-tag.\n"
        ],
        "answers": [
            "A"    
        ],
        "docs": "Se deben crear tags por namespace para asignar permisos por departamento"
    },
    {
        "title": "A client has three AEM environments: PROD, STAGE, and DEV. PROD and. STAGE have more authoring activities such as content creations and updates compared to DEV. Disk space and performance are major requirements for the client.\nWhich maintenance activity should the Architect recommend on the DEV environment? (Choose one.)\n",
        "options": [
            "Revision Cleanup with the estimation phase disabled.\n",
            "Enable Day CQ WCM Version Purge Task.\n",
            "Revision Cleanup with the estimation phase enabled.\n",
            "Delete all 'tar.bak' files from the SegmentStore folder.\n"
        ],
        "answers": [
            "B"    
        ],
        "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/deploying/configuring/version-purging.html?lang=en"
    },
    {
        "title": "A customer’s AEM Sites platform has recently gone live. The customer uses Cloud Manager to run the standard tests, and the test results do not show any issues. After going live, the website visitors report very slow response times.\nThe Architect needs to confirm performance is sufficient when going live with a new platform.\nWhich additional test should the Architect perform to meet this requirement? (Choose one.)\n",
        "options": [
            "Run a scalability test to determine if the performance is adequate.\n",
            "Run a performance and availability test through the standard cloud manager testing suite to identify performance gaps.\n",
            "Run an additional stress test to highlight where the systems boundaries are to re-evaluate sizing of the instances.\n",
            "Execute an accessibility test to show if the platform has a high enough level capacity to perform correctly.\n"
        ],
        "answers": [
            "B"    
        ],
        "docs": "Cloud Manager puede realizar pruebas de performance y disponibilidad"
    },
    {
        "title": "A customer wants to present a store front using AEM and Magento e-commerce platform. Refer to the following requirements:\n- They use a third-party PIM System\n- They want to use Adobe recommendations and utilize an OOTB solution in building this integration.\nWhile designing and documenting this solution, how should an Architect explain information relating to products and catalogs? (Choose one.)\n",
        "options": [
            "Product and Catalog information is consumed and stored in AEM through a scheduled import process from the third-party PIM System that only updates the changes.\n",
            "Product and Catalog information is consumed and stored into AEM through a scheduled import process from Magento that only updates the changes.\n",
            "Product and Catalog information is consumed and stored into AEM through a scheduled import process from Magento that updates the whole catalog with every import.\n",
            "Products and Catalogs information is dynamically consumed from Magento, rendered on page, and cached on dispatcher.\n"
        ],
        "answers": [
            "B"    
        ],
        "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/commerce/integrations/magento.html?lang=en"
    },
    {
        "title": "A company is implementing a new e-commerce site that is expected to get seasonal and flash-sale induced traffic peaks from all over the world. It is projected that a minute of downtime could cause excessive lost revenue. The company management wants to keep resource utilization to optimal levels without experiencing degradation to avoid introducing bugs in the system.\nThe Architect needs to choose between AEM 6.5 and AEM as Cloud Service.\nWhat are the two most critical non-functional requirements the Architect must consider? (Choose two.)\n",
        "options": [
            "Usability\n",
            "Scalability\n",
            "Reliability\n",
            "Maintainability\n",
            "Availability\n"
        ],
        "answers": [
            "A","E"],
         "docs": "https://www.pass4success.com/adobe/discussions/exam-ad0-e117-topic-5-question-3-discussion"
    },
    {
        "id": 31,
        "title": "During the implementation of a public-facing website based on AEM as a Cloud Service, the customer raises an additional requirement to have a commenting functionality for end users implemented on the pages.\nWhat should the Architect do to make the design a future proof solution? (Choose one.)\n",
        "options": [
            "Save comments in JCR and leverage Sling Distribution to synchronize comments between publishers\n",
            "Integrate a third-party solution to store comments externally\n",
            "User MongoDB as provided with AEM as a Cloud Service to store the comments\n",
            "Save comments in JCR and leverage reverse replication to synchronize comments via author\n"
        ],
        "answers": [
            "C"],
         "docs": "https://www.pass4success.com/adobe/exam/ad0-e117"
    },
    {
        "title": "A user is part of the Employees LDAP group synchronized with AEM. The same user is added to the authors group in AEM. The user is then removed from the Employees group on the LDAP server.\nWhat is the result during the next synchronization with AEM? (Choose one.)\n",
        "options": [
            "The user is removed from the authors group but not the Employees group in AEM\n",
            "The user is removed from both the Employees and the AEM authors groups\n",
            "The user is not removed from either the Employees and the AEM authors groups\n",
            "The user is removed from the Employees group but not the authors group in AEM\n"
        ],
        "answers": [
            "B"],
         "docs": ["https://kbwebconsult.com/aem-automatic-user-synchronization-with-ldap/","https://www.exam4training.com/what-is-the-result-during-the-next-synchronization-with-aem/","https://www.itexamshop.com/adobe-experience-manager-sites-architect-master-ad0-e117-test-questions-are-real/","https://www.certification-questions.com/pdf-download/adobe/ad0-e117-pdf.pdf"]
    },
    {
        "title": "An existing AEM sites platform will receive the latest service pack. The service pack includes functional and non-functional fixes such as security patches.\nWhich action should the Architect take to make sure the update is successful? (Choose one.)\n",
        "options": [
            "Install the service pack in staging and ensure that all the bundles are up and running, then deploy to production.\n",
            "Identify the packages affected by the service pack after installing them into production and monitor them.\n",
            "Advise the customer to request Adobe to install the fixes directly on production since they are prechecked.\n",
            "Do a full staging of the service pack including a regression test, if passed, deploy to production.\n"
        ],
        "answers": [
            "B"],
         "docs": "https://www.pass4future.com/questions/adobe/ad0-e117"
    },
    {
        "title": "A client is using AEM and wants to make sure they are managing their configurations correctly. Refer to the following requirements:\n- The client has multiple brands that they will be hosting on a single AEM implementation\n- The client wants to reuse as much between brands as possible\n- Each brand needs to be able to override the default values for items like contact us information\n- The client plans to support multiple languages in multiple regions for each brand\n- Each brand/language/region combination will have its own set of content approvers used as part of a custom workflow\nWhich approach should an Architect recommend to manage the client’s configurations for AEM? (Choose one.)\n",
        "options": [
            "Use OSGi to manage approval group and provide default contact us information by runmode.\n",
            "Use Context-aware configurations to manage configuration overrides and approval group by brand/language/region combination\n",
            "Use the OOTB Configuration Browser to set configuration defaults and approval group by brand/language/region combination.\n",
            "Use OSGi Configuration to handle configuration overrides by brand. Create a new workflow for each brand/language/region combination for content approval.\n"
        ],
        "answers": [
            "A"],
         "docs": ["https://www.pass4test.com/AD0-E117-exam-questions.html","https://www.examslabs.com/articles/real-ad0-e117-exam-pdf-test-engine-practice-test-questions-q25-q41/"]
    },
    {
        "title": "A website built on AEM Sites displays the company’s stock price in the footer of all pages. The stock data is retrieved from a third party REST service using two-way SSL and rendered in an AEM component using HTL. During performance testing in the last development sprint, it becomes apparent that the third party service sometimes takes up to 30 seconds to respond, which degrades the overall site performance.\nHow should an Architect address this issue? (Choose one.)\n",
        "options": [
            "Temporarily remove the component from all content\n",
            "Add a 5 second timeout to the REST call\n",
            "Load the stock data component asynchronously\n",
            "Call the REST service directly from the browser\n"
        ],
        "answers": [
            "C"],
         "docs": ["https://www.exam4training.com/how-should-an-architect-address-this-issue/","https://www.itexamshop.com/adobe-experience-manager-sites-architect-master-ad0-e117-test-questions-are-real/","https://pdf.it-dumps.com/AD0-E117.pdf"]
    },
    {
        "title": "In a client's test environment, AEM QA Testers from multiple groups and regions are testing and making requests to the AEM application. Due to the sheer number of hosts making connections, an Architect needs a quick and easy way to allow any hosts to make requests to the AEM application.\nWhich approach should the Architect take to meet this requirement for this non-production environment? (Choose one.)\n",
        "options": [
            "Enable Allow Empty in the Apache Sling Referrer OSGi Configuration\n",
            "Restrict Clients that can flush the cache in the Dispatcher Configuration\n",
            "Use Allowlists instead of Blocklists in the Dispatcher Configuration\n",
            "Add GET as a Filter Method in the Apache Sling Referrer OSGi Configuration\n"
        ],
        "answers": [
            "A"],
         "docs": ["https://sourcedcode.com/blog/aem/in-aem-what-is-the-apache-sling-referrer-filter-osgi-configuration","https://aem4beginner.blogspot.com/what-is-aem-apache-sling-referrer","https://sourcedcode.com/blog/aem/in-aem-what-is-the-apache-sling-referrer-filter-osgi-configuration"]
    },
    {
        "title": "An enterprise client is on-boarding an AEM Desktop application to provide authors with the ability to load the AEM repository virtually on the file system. The desktop application is unable to connect to the AEM Author, which has SSL enabled. The intermediate certificate is installed on Apache.\nHow should an Architect resolve this issue? (Choose one.)\n",
        "options": [
            "Install the certificate chain to the keystore of the AEM authentication service user\n",
            "Install the Root certificate to the AEM truststore\n",
            "Install the certificate chain to the AEM truststore\n",
            "Install the certificate chain to the keystore of the AEM ssl-service user\n"
        ],
        "answers": [
            "D"],
         "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/ssl-by-default.html?lang=en#enabling-ssl-by-default"
    },
    {
		"title": "A client recently purchased the Smart Content Service and is considering using the Enhanced Smart Tagging feature. As part of the process, the client recently created a new tagging taxonomy that has not been applied to any assets yet. An Architect needs to demonstrate the feature on a subset of the client’s assets before using on all assets.\n",
		"options": [
			"Enable Smart Tagging via the folder properties for a single folder of assets \n",
			"Add a sample assets to a new folder, tag assets in folder, then run the Smart Tags Training workflow\n",
			"Add sample assets to a new folder, tag assets in folder, then enable Smart Tagging via the folder properties \n",
			"Enable Smart Tagging via the folder properties for a single folder of assets, then run the Smart Tags Training workflow \n"    ],
		"answers": [
			"B"    ],
		"docs": "https://experienceleague.adobe.com/docs/experience-manager-64/assets/administer/enhanced-smart-tags.html?lang=en => 'For the Smart Content Service to apply the right tags, you must train it to recognize your taxonomy. To train the service, first curate a set of assets and tags that best describe these assets. Apply these tags on the assets and run a training workflow to help the service learn.'"
	},
	{
		"title": "A client designs a new experience for one of their brand sites with the following parameters: \n - The new experience should behave like a desktop application \n - There is a lot of dynamic content in the app \n - SEO and initial page load are a top concern for the client \n - The client’s marketing team needs to be able to author the content with a WYSIWYG editor \n",
		"options": [
			"Create a set of API-driven components \n",
			"Use the traditional server side components on the website \n",
			"Use AEM as a headless CMS \n",
			"Use the SPA Editor SDK with Server Side Rendering\n"    ],
		"answers": [
			"D"    ],
		"docs": "https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-ssr.html?lang=en#"
	},
	{
		"title": "A large AEM enterprise site is implementing authentication and requires a true optimal load balancing across the site’s multi AEM publish instances.\n  Which approach should an Architect take to meet this requirement? (Choose one.) \n",
		"options": [
			"Configure Sticky Connections \n",
			"Enable Round Robin processing in Dispatcher configuration \n",
			"Enable Encapsulated Token Option \n",
			"Configure the Dispatcher to run with a Dedicated System User \n"    ],
		"answers": [
			"B"    ],
		"docs": "https://help.adobe.com/en_US/AEMForms/PrepareInstallCluster/WS624e3cba99b79e12693a1d1b12eea97fc20-7ff4.2.html"
	},
	{
		"title": "A financial sector client is using AEM 6.5 on premise. The creative team needs to create the content for the various marketing campaigns that are scheduled. The client wants to use Experience Fragments (XF) to accelerate content creation for marketing purposes. \n Which Data flow diagram should an Architect use to communicate requirements to the client network team? (see diagrams here https://grupovass-my.sharepoint.com/:i:/g/personal/julio_ros_vass_es/ETq97PaVX6dKrJmOa3ItxxEBcqQhy6ZlxDCIOG-C8sa-0Q?e=KXL5Dx) \n",
		"options": [
			"A\n",
			"B\n",
			"C\n",
			"D\n"    ],
		"answers": [
			"A"    ],
		"docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/assets/aem-target-use-case-1-4.png?lang=en, \n https://experienceleague.adobe.com/docs/experience-manager-learn/sites/personalization/experience-fragment-target-offer-feature-video-use.html?lang=en"
	},
	{
		"title": "A customer has an international presence and a strong brand image. The customer considers the exceptional quality images used for both print and on the website to be essential for its business. The customer uses AEM 6.5 managed services with a configuration of 2 dispatchers, 2 publishers, and 1 author. \n The original images can weigh up to 500Mb with videos weighing even more. Renditions are generated after files are uploaded to AEM DAM by the Design team so the Authoring team can use them on the website. \n The teams report issues with platform stability and slowness. Visitors report that images look pixelated on some screens and pages are very slow to load. \n Which two actions should the Architect take to resolve these issues? (Choose two.) \n",
		"options": [
			"Split AEM Assets and Sites in two different stacks and use Connected Assets \n",
			"Train the design team to upload smaller assets and save the originals elsewhere \n",
			"Allocate more memory to ImageMagick and FFmpeg \n",
			"Add more dispatchers and publishers to the AEM configuration \n",
			"Optimize renditions for the different viewports used by the visitors \n",		],
		"answers": [
			"A,E"    ],
		"docs": ""
	},
    {
        "title": "A client using AEM 6.5 on-premise is experiencing an unsustainable repository growth of 100Gb a day. After investigation, an Architect finds out that the DAM is causing this issue. Each image uploaded to the DAM triggers the creation of approximately 100 renditions, necessary by business to consume in different channels and systems. The client also complains about stale content reported by site visitors happening randomly in pages where article-related components are present.",
        "options": [
          "Leverage AEM Adaptive Image Servlet, cache image variations in Dispatcher, and re-implement article-related components to use AJAX to load the content.\n",
          "Split WCM and DAM in separate instances, set up Connected Assets, and re-implement article-related components to use AJAX to load the content\n",
          "Split WCM and DAM in separate instances, set up Connected Assets, and implement a workflow to purge all pages affected by an article change in Dispatcher\n",
          "Leverage AEM Adaptive Image Servlet, cache image variations in Dispatcher, and implement a cache TTL in Dispatcher\n"
        ],
        "answers": [
          "A"
        ],
        "docs": "https://www.pass4future.com/questions/adobe/ad0-e117"
      },
      {
        "title": "A media company surveys the end users of their AEM Sites website. The survey identifies that is difficult to locate content on the site due to lack of relevancy and slow performance when navigating through the large volume of content. To address both issues, the business team suggests integrating an innovate taxonomy product to the company’s AEM implementation. The product is new on the market, and the development team has no experience with the technology. Which two steps should an Architect recommend to evaluate this new feature? (Choose two.)",
        "options": [
          "Test usability of the feature with selected business users\n",
          "Develop the integration as proof of concept with full production content\n",
          "Develop the integration and deploy it to 50% of the production AEM instances\n",
          "Develop the integration as proof of concept with sample content\n",
          "Test usability of the feature with selected end users\n"
        ],
        "answers": [
          "A",
          "B"
        ],
        "docs": "https://www.pass4future.com/questions/adobe/ad0-e117"
      },
      {
        "title": "A customer with an existing AEM implementation wants to enrich product pages with technical data coming from their PIM system. The PIM system sits behind an API Management solution that publicly exposes the PIM API’s as RESTful web services with basic authentication as the security mechanism. Data consistency with the PIM and secure access to the APIs are key elements of the integration. How should the Architect set up the integration between AEM and the PIM? (Choose one.)",
        "options": [
          "Import the technical data into the AEM Author and replicate to Publishers\n",
          "Convert the technical data to Content Fragments and expose using Content Services\n",
          "Use a client-side integration with AJAX from the browser to the API Management\n",
          "Integrate the AEM Publishers directly with the API Management solution\n"
        ],
        "answers": [
          "D"
        ],
        "docs": "https://issuu.com/william.pathy/docs/aem_sites_architect_ad0-e117_practice_test_questio"
      },
      {
        "title": "A customer wants to migrate their AEM environment from an on-premise infrastructure to a public cloud to improve performance. The customer currently hosts many assets (images, videos, documents) in the DAM. Approximately 10 business users frequently upload new assets and update existing assets. Editors then use these assets on the sites.What should an Architect do as part of this migration? (Choose one.)",
        "options": [
          "Set up a horizontally scalable AEM environment on MongoDB\n",
          "Set up Connected Assets to share the DAM assets in the sites\n",
          "Move to a shared datastore and enable binary less replication\n",
          "Run online revision cleanup before moving to the new storage format\n"
        ],
        "answers": [
          "D"
        ],
        "docs": "https://freedumps.certqueen.com/ad0-e117-adobe-experience-manager-sites-architect-master-dumps/"
      },
      {
        "title": "A client is in the discovery process for building a React native app, which is a single codebase that runs natively on iOS and Android. The goal is to reduce development costs. The client wants to reduce content creation costs in the new react Native app by reusing as much of the marketing content already published in their AEM instance. What should the Architect recommend to meet this requirement? (Choose one.) ",
        "options": [
          "Sling Resource Resolution\n",
          "OSGi Bundles\n",
          "Experience Fragments\n",
          "Content Fragments\n"
        ],
        "answers": [
          "D"
        ],
        "docs": "https://www.pass4success.com/adobe/discussions/exam-ad0-e104-topic-1-question-2-discussion"
      },
      {
        "title": "A client's site does not show the latest page content for some site visitors. The client has two data centers with each configured with a Dispatcher connected to two Publish machines. The site load issue only occurs intermittently for visitors from one of the data centers. Which step should the Architect take to resolve the issue? (Choose one.)",
        "options": [
          "Disable caching on all impacted data centers Dispatchers to force the Publish machines to serve the page content\n",
          "Review the log files on the Author instances to determine if there are any template errors\n",
          "Check the Publish instance(s) attached to the Dispatcher associated to the impacted data center\n",
          "Check the SSL certificate on the impacted data center's load balancer \n"
        ],
        "answers": [
          "D"
        ],
        "docs": "https://www.pass4success.com/adobe/discussions/exam-ad0-e117-topic-5-question-23-discussion"
      },
      {
        "title": "An AEM customer is designing a new website. The design shows that images are very prominent on the website but there is a concern about the big variety of aspect ratios used. Images con potentially be used on different places and components on the website. The customer is looking for a maintainable solution to limit the amount of content editing work when adding the assets to the pages. Which solution should an Architect recommend? (Choose one.)",
        "options": [
          "Integrate with Dynamic Media (Scene 7) and enable smart imaging\n",
          "Integrate with Dynamic Media (Scene 7) and enable smart cropping\n",
          "Use the cropping feature on the asset in the AEM DAM\n",
          "Use inline cropping feature of the image component on the pages\n"
        ],
        "answers": [
          "A"
        ],
        "docs": "https://free-braindumps.com/adobe/free-ad0-e117-braindumps.html?p=4"
      },
      {
        "title": "A client wants to change how they publish their content. Refer to the following client business requirements:\n• The client has a seasonal business that has significant content changes across their site that need to be rolled out at once based on the season change over date.\n• The content authors need to be able to work one season in advance of publish dates to ensure that all changes can be completed on time.\n• The content authors need a way to indicate that all the seasonal changes are ready. If the content changes are not completed, then the pages should not get published.\n• The content authors need the ability to modify the current live pages without rolling back changes for a future content rollout.\n What approach should the Architect recommend? (Choose one.)",
        "options": [
          "Use the Versioning feature when editing a page to toggle and publish changes when ready.\n",
          "Use Launches inside of AEM for each new season and use the production ready flag to show changes are completed.\n",
          "Create a Project inside of AEM for each new season and create a task for notifying that changes are completed.\n",
          "Use the Manage Publication with scheduling value set to the season change over date when changes are completed.\n"
        ],
        "answers": [
          "D"
        ],
        "docs": "https://issuu.com/cimapastpapers/docs/ad0-e117_exam_dumps_2021"
      },
      {
        "title": "AEM platform utilizes Lucene as its main search engine; add search indexes to Lucene search engine.\n Users report cases where data inaccuracies are present in an AEM component that relies on AEM Search functionality. The AEM platform utilizes Lucene as its main search engine. The AEM platform utilizes Lucene as its main search engine.\n How should an Architect resolve this issue?",
        "options": [
          "Scale up server resources to meet demands\n",
          "Change the search engine to Property Search.\n",
          "Migrate search engine to an external Solr instance\n",
          "Add search indexes to Lucene search engine.\n"
        ],
        "answers": [
          "D"
        ],
        "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/deploying/practices/best-practices-for-queries-and-indexing.html?lang=es#lucene-or-property-indexes \n  https://www.exam4training.com/how-should-an-architect-resolve-this-issue/ \n  https://www.itexamshop.com/adobe-experience-manager-sites-architect-master-ad0-e117-test-questions-are-real/"
    },
    {
        "title": "Serve localized content to several regional websites; translation connector and i18N API \n A customer wants to implement an AEM solution to serve localized content to several regional websites. \n Which AEM capability should the Architect recommend? (Choose one)",
        "options": [
          "Use translation connector and i18N API\n",
          "Use translation connector and translation workflows \n",
          "Use translation connector and Multi Site Manager\n",
          "Use i18N API and Multi Site Manager\n"
        ],
        "answers": [
          "C"
        ],
        "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/administering/introduction/tc-bp.html?lang=en"
    },
    {
        "title": "SSO, integrate customer’s IMS; implement and config SSO Auth Handler \n A customer has a requirement to allow authors to access AEM with single sign-on. To achieve this an Architect needs to integrate AEM with the customer’s identity management system. \n Which two actions could an Architect take to meet this requirement? (Choose two.)",
        "options": [
          "Configure the generic SSO Authentication Handler\n",
          "Configure the SAML Authentication Handler \n",
          "Implement the generic SSO Authentication Handler interface\n",
          "Configure the Sling Authentication Requirements for the OSGi HTTP Service\n",
          "Implement a custom JAAS Login Module"
        ],
        "answers": [
          "A",
          "B"
        ],
        "docs": "https://medium.com/adobetech/saml-authentication-in-aem-using-microsoft-azure-active-directory-30d668338a8f"
    },
    {
        "title": "Deployment process without downtime; one dispatcher to one publish, deploy packages to publishers one by one \n An Architect needs to design a deployment process without downtime for end users. The system architecture contains an AEM author, two AEM publishers, two publish Dispatchers, and a centrally managed load balancer. The publishers serve some content that cannot be cached. \n Which two actions should the Architect take to meet these requirements? (Choose two.) ",
        "options": [
          "Connect each publish Dispatcher to one AEM publish\n",
          "Deploy software packages by replicating them from author to publishers \n",
          "Use each publish Dispatcher to load-balance to both AEM publishers\n",
          "Configure the centrally managed load balancer to connect directly to the AEM publisher that is not being deployed to\n",
          "Deploy software package to AEM Publishers one by one"
        ],
        "answers": [
          "A",
          "E"
        ],
        "docs": ""
    },
    {
        "title": "Cache hit ratio 47.94%; optimize cache config\n  AEM Site users report that the web content pages render very slowly. An Architect notices that the CPU usages of the AEM Publish instances are spiking and reviews the following entry in the log: \n [Fri Nov 27 23:11:00 2019] [I] [pid 16004 (tid 140134145820416)] Current cache hit ratio: 47.94% \n What should the Architect do to increase the dispatcher cache ratio and prevent the AEM Publish CPU usage spikes? (Choose one.)",
        "options": [
          "Add additional dispatcher servers\n",
          "Create a cron job that will delete the dispatcher cache on a regular basis\n",
          "Review and optimize the Dispatcher cache configuration\n",
          "Add additional AEM instances to the Publish Farm\n"
        ],
        "answers": [
          "C"
        ],
        "docs": ""
    },
    {
        "title": "Components PDF list is empty; Oak Index \n A new AEM Sites implementation includes a component that lists the 10 most recently published PDF documents in AEM Assets. The component works as expected during development and passes QA testing. The business starts to use it while entering content and uploading assets in preparation for go-live. A few days later, the component’s PDF list is empty. \n What is the most likely cause of the issue?",
        "options": [
          "The component is missing a matching Oak index.\n",
          "The component is missing the HTL display context to escape the PDF title.\n",
          "A PDF with incorrect MIME type has been uploaded.\n",
          "A PDF with too large file size has been uploaded.\n"
        ],
        "answers": [
          "A"
        ],
        "docs": ""
    },
    {
      "title": "During the discovery phase of a new global banks AEM platform implementation, an Architect adds a non-functional requirement. \nThe delivery of content for an Asian and a South American country must be delivered from local servers where no other content is allowed to be stored. The setup for website delivery must be redundant. The bank is operating globally and wants to have an excellent editing experience for the editors, who all work from the bank’s main office in London. \n All form-based data will be leveraging a front end integration.",
      "options": [
        "Replication leveraging path-based ACLs dedicated replication agents\n",
        "Replication agents using default replication agent setup\n",
        "Replication agents replicating content to all Publish asynchronously\n",
        "Replication leveraging authentication and dedicated replication agents\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A popular News portal site wants to move from their custom CMS to AEM On Premise. The client is on a limited budget and is only able to purchase the 1 Author 2 Publish Production license. The client cannot afford a CDN until the site can generate enough revenue.\n The client also has the following requirements: \n - Migrate about two billion content pages and assets \n - A site that is available at all times (even if the content is slightly stale) \n - An improved search function that can do relevance tuning and faceted search \n - The website needs to behave like a desktop application \n - News authors write content once; the content can then be reused multiple times in different channels",
      "options": [
        "Implement AEM with SPA support and set up an Oak JCR Propery Index\n",
        "Implement AEM with static and dynamic pages and set up an embedded Solr server\n",
        "Implement AEM with SPA support and set up a remote Solr servers\n",
        "Implement AEM with SPA support and set up a remote Solr server\n",
        "Implement AEM with static and dynamic pages and use the Lucene engine.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "There are three types of business users: \n -	Marketers who use Adobe Target to drive personalization on the website \n -	Site editors working with AEM \n -	Asset editors who manage assets in an external DAM \n The marketers currently spend a lot of time uploading content and assets directly in Adobe Target. The customer wants to improve this process. \n What should the Architect recommend to the customer? (Choose one.)",
      "options": [
        "Use Experience Fragments in AEM for targeted offers\n",
        "Use Content Fragments and export them as JSON using Content Services\n",
        "Configure the replication agent in AEM to replicate content to Target\n",
        "Let the marketers use Contexthub Personalization in AEM\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://helpx.adobe.com/uk/marketing-cloud/how-to/aem-target.html"
    },
    {
      "title": "A multinational beauty company uses AEM to host websites for all of its brands. Each brand runs new campaigns on a regular basis and often in parallel. The campaigns begin with targeted advertisements on online channels to bring the users back to the website. The success of each campaign is measured through conversion ratings in Adobe Analytics.\n Recently users report that the website performance is degrading. While investigating the issue, an Architect determines the following: \n There are three types of business users-	Campaign tracking is done through a different URL query parameter \n -	Another URL query parameter is used for critical dynamic application functionality like searches \n -	Log analysis shows that the performance starts to degrade when many requests from the campaigns land on AEM \n What should the Architect do to resolve this issue? (Choose one.)",
      "options": [
        "Deny a wildcard but allow the campaign query parameters in the /filter section on the Dispatcher\n",
        "Rewrite the query parameters to selectors to leverage Dispatcher caching\n",
        "Deny a wildcard but allow the dynamic query parameters in the /filter section on the. Dispatcherble binary less replication\n",
        "Allow a wildcard but deny the dynamic query parameters in the /ignoreUrlParams section on the Dispatcher\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A financial customer wants to set up AEM on premise. The customer has a strong security requirement that traffic to the technical consoles in AEM (Web Console) must be encrypted. The solution should support secured server-to-server communications and be automated so it can be easily rolled out to a new AEM environment. \n Which solution should an Architect implement to meet the security requirements? (Choose one.)",
      "options": [
        "Place a reverse proxy with SSL in front of the AEM instances\n",
        "Set up a VPN tunnel to the AEM environment subnet\n",
        "Use the Dispatchers and configure SSL to connect to the AEM instances\n",
        "Connect directly to AEM instances with the SSL by default configured\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://helpx.adobe.com/es/experience-manager/6-3/sites/administering/using/ssl-by-default.html"
    },
    {
      "title": "A client approaches an Architect with multiple design layouts for a new page. The client wants to run A/B testing on the layouts before making a final choice. \n What should the Architect do to meet this requirement? (Choose one.)",
      "options": [
        "Create a content fragment model and generate a new content fragment for each layout\n",
        "Create a new page with a version for each layout\n",
        "Create a new template and generate a test page for each layout\n",
        "Create a new experience fragment with a variation for each layout \n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "An AEM customer has a website presence in different countries and in multiple languages. In their organization, a central editor team creates part of the content for all countries. Each country has a local editor team that manages the content of the specific country website. \n The customer has the following requirements: \n -	The centrally managed content needs to be pushed to the countries \n -	The local editors are responsible to translate the content in their local language \n -	The local editors need to be able to overwrite content that is pushed from the central team \n How should an Architect design the content hierarchy? (Choose one.)",
      "options": [
        "Image 1\n",
        "Image 2\n",
        "Image 3\n",
        "Image 4\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    }
    
]